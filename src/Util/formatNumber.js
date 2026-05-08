/**
 * Parse chuỗi tiền tệ compact của CoinGecko về số thực.
 * Ví dụ: "$1.23B" → 1230000000, "$456.78M" → 456780000, "$500K" → 500000
 * @param {string|number} str
 * @returns {number}
 */
export function parseCompactCurrency(str) {
  if (typeof str === "number") return str;
  if (!str || typeof str !== "string") return 0;

  const clean = str.replace(/[$,\s]/g, "");
  const multipliers = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 };
  const match = clean.match(/^([\d.]+)([KMBT]?)$/i);
  if (!match) return 0;

  const num = parseFloat(match[1]);
  const mult = multipliers[match[2].toUpperCase()] || 1;
  return num * mult;
}

/**
 * Format số sang dạng compact có ký hiệu tiền tệ USD.
 * Ví dụ: 1230000000 → "$1.23B", 456780000 → "$456.78M"
 * Cũng chấp nhận chuỗi compact từ CoinGecko (sẽ parse trước).
 * @param {string|number} value
 * @returns {string}
 */
export function formatCompactCurrency(value) {
  const num = typeof value === "string" ? parseCompactCurrency(value) : value;
  if (!num || isNaN(num)) return "N/A";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  }).format(num);
}

/**
 * Format phần trăm thay đổi 24H, làm tròn 2 chữ số thập phân.
 * Ví dụ: 5.2345 → "+5.23%", -2.1 → "-2.10%"
 * @param {string|number} value
 * @returns {string}
 */
export function formatPercent(value) {
  const num = parseFloat(value);
  if (isNaN(num)) return "N/A";
  const sign = num >= 0 ? "+" : "";
  return `${sign}${num.toFixed(2)}%`;
}

/**
 * Format giá trị PRICE với ký hiệu $, xử lý cả số thuần và string có sẵn $.
 * Ví dụ: 65000.5 → "$65,000.50", "$0.023" → "$0.023"
 * @param {string|number} value
 * @returns {string}
 */
export function formatPrice(value) {
  if (typeof value === "string") {
    // Nếu đã có ký hiệu $ rồi thì trả về nguyên (trường hợp Trending API)
    const clean = value.replace(/[$,\s]/g, "");
    const num = parseFloat(clean);
    if (isNaN(num)) return value;
    return `$${num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 6 })}`;
  }
  if (!value && value !== 0) return "N/A";
  return `$${Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 6 })}`;
}

