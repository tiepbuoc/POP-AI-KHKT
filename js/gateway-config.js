/**
 * Cấu hình kết nối tới POP-AI Gateway (n8n).
 *
 * KHÔNG có API key LLM ở đây — key thật chỉ nằm trong Credentials của n8n.
 * Không cần web_id / web_secret: n8n nhận diện web gọi AI qua header Origin (do trình duyệt gắn)
 * và page_url, rồi tự ghi nhận vào log/thống kê.
 */

// URL gốc của webhook n8n (không có dấu "/" ở cuối). Ví dụ: https://n8n.ten-mien-cua-ban.com/webhook
export const GATEWAY_BASE_URL = "https://n8nhosting-67079049.phoaify.com/webhook";

// Tiền tố path của nhánh n8n dành cho bản clone: webhook sẽ là <GATEWAY_BASE_URL>/<GATEWAY_PATH_PREFIX>-token | -chat | -admin
// (khớp với nhánh "PC ..." trong n8n/popaiclone-gateway-branch.json)
export const GATEWAY_PATH_PREFIX = "popaiclone-gw";
