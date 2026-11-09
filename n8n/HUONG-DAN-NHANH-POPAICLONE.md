# Thêm nhánh POP-AI CLONE vào workflow n8n chung

Nhánh gồm 23 node, tên bắt đầu bằng `PC ` (PC Webhook Token, PC Config, PC Chat Gate, …),
webhook: `/webhook/popaiclone-gw-token`, `/popaiclone-gw-chat`, `/popaiclone-gw-admin`.

## Cách 1 — Dán vào workflow đang chạy (khuyên dùng, không đụng các nhánh cũ)
1. Mở file `n8n/popaiclone-gateway-branch.json`, copy toàn bộ nội dung.
2. Mở workflow **HUONGMO Gateway** trong n8n, bấm vào vùng trống của canvas, nhấn **Ctrl+V**.
   Nhánh mới hiện ở **dưới cùng** canvas (cách các nhánh cũ một đoạn).
3. Mở node **PC Config**, sửa:
   - `allowedOrigins`: thay `<TEN-GITHUB>` bằng tên tài khoản GitHub chứa web (vd. `https://nguyenvana.github.io`).
   - `adminKey` (tuỳ chọn, ≥ 16 ký tự). Để rỗng thì endpoint admin tắt.
4. Mở **PC LLM 1/2/3**: kiểm tra credential là *Header Auth* đang dùng cho các nhánh khác (file đã gán sẵn credential `Header Auth account`).
5. **Save**, rồi **Publish/Active** lại workflow.

## Cách 2 — Import cả workflow
`n8n` → Import from file → chọn bản gộp `HUONGMO_Gateway_with_popaiclone.json` (nếu bạn có) rồi làm bước 3–5.
Cách này ghi đè workflow cũ, nên chỉ dùng khi đã backup.

## Kiểm tra nhanh
```bash
curl -i -X POST https://n8nhosting-67079049.phoaify.com/webhook/popaiclone-gw-token \
  -H "Origin: https://<TEN-GITHUB>.github.io" -H "Content-Type: text/plain" \
  -d '{"id_token":"abc","page_url":"https://<TEN-GITHUB>.github.io/<TEN-REPO>/"}'
```
Trả về `401 invalid_id_token` là đúng (gateway sống, origin hợp lệ, token giả bị từ chối).
`403 origin_not_allowed` nghĩa là chưa sửa `allowedOrigins`.

## Lưu ý
- Nhánh dùng **chung static data** với các nhánh khác (bộ đếm ngày, giới hạn, log, khoá ký token, công tắc `disabled`):
  trần `dailyRequestCap`/`dailyTokenCap` là trần chung cả workflow; admin `disable` sẽ tắt cả các nhánh.
- Token của nhánh clone có `iss = popaiclone-gw`, nên token của nhánh Pop AI gốc (`popai-gw`) không dùng được ở đây và ngược lại.
- Gateway xác minh người dùng bằng apiKey của project `popaiclone` (đặt trong `PC Config`).
