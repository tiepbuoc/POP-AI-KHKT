// Cấu hình Firebase của dự án POP-AI (bản clone, project "popaiclone").
// Lấy từ: Firebase Console > Project settings > General > Your apps > Web app.
// Lưu ý: apiKey của Firebase Web KHÔNG phải mật khẩu — nó chỉ định danh dự án.
// Việc bảo vệ dữ liệu phụ thuộc vào firestore.rules, không phụ thuộc vào việc giấu key này.
export const firebaseConfig = {
  apiKey: "AIzaSyBA3bU_SdVNTHl73Vtfcj_eB3R9bEQrbls",
  authDomain: "popaiclone.firebaseapp.com",
  // Realtime Database (lịch sử chat Trợ lý AI). Config Firebase trả về không kèm databaseURL vì project chưa tạo RTDB;
  // dòng dưới là URL mặc định của vùng us-central1. Nếu bạn tạo RTDB ở vùng khác (vd. Singapore) thì thay bằng URL
  // hiện trên Firebase Console > Realtime Database (dạng https://popaiclone-default-rtdb.<vùng>.firebasedatabase.app).
  databaseURL: "https://popaiclone-default-rtdb.firebaseio.com",
  projectId: "popaiclone",
  storageBucket: "popaiclone.firebasestorage.app",
  messagingSenderId: "188195954905",
  appId: "1:188195954905:web:addfd68afe4d25ee551ec8",
  measurementId: "G-WRWEPRC07C"
};

// Dùng cho extension (gọi Firestore/Auth qua REST API, không qua SDK)
export const FIREBASE_PROJECT_ID = firebaseConfig.projectId;
export const FIREBASE_API_KEY = firebaseConfig.apiKey;
