import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_sp">
        <h2>HỖ TRỢ KHÁCH HÀNG</h2>
        <ul>
          <li>Các Câu Hỏi Thường Gặp</li>
          <li>Chính Sách Đổi/Trả Hàng</li>
          <li>Quy Định Viết Bình Luận</li>
        </ul>
      </div>

      <div className="footer_contact">
        <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
        <ul>
          <li>Hotline: 1900 0000</li>
          <li>Email: hotro@xxx.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
