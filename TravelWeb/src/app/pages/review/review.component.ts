import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  title = 'Hồ Con Rùa';
  contentArticlePar1 = 'Ròng rã suốt 3 thế kỷ từ thời Pháp thuộc, trước và sau 1975, địa danh Hồ con Rùa được xem là một công trình văn hóa, lịch sử đã từng chứng kiến vô số sự kiện sôi nổi của lịch sử nước ta. Vào năm 1878 ngay tại khoảnh đất rộng bao la này, người Pháp đã cho xây một tháp nước khá kiên cố có tên là Công trường Tháp nước, sau đó đến năm 1921, họ phá bỏ tháp nước để xây Đài tưởng niệm lính chết trận, dân gian quen gọi là Công trường 3 hình, rồi vào năm 1956, chính quyền VNCH thay Đài tưởng niệm Công trường 3 hình người lính Pháp bằng Công trường chiến sĩ trận vong, để sau đó 10 năm sau chính thức xây dựng Hồ con Rùa như ngày nay.';
  contentArticlePar2 = 'Hồ con Rùa là một công trình vòng xoay giao thông cho 3 con đường Phạm Ngọc Thạch, Võ Văn Tần và Trần Cao Vân được trồng nhiều hàng cây dầu cổ thụ bao quanh bùng binh có đường kính 100m, ở giữa hồ cạn có một khối gồm 5 hàng cột bê-tông cốt thép cao 34m, trên ngọn có hình dạng 5 bàn tay xòe ra như cánh hoa, ngay bên dưới hàng cột có bệ xi-măng đặt hình tượng một con rùa bằng kim loại bọc đồng, đầu rùa hướng về con đường Võ Văn Tần, trên lưng con rùa có đội một tấm bia đá ghi tên các nước bạn đồng minh của chế độ cũ, đến năm 1978 con rùa không còn vì bị phá hủy. Xung quanh lòng hồ, có những đường đi nội bộ trên mặt nước hình xoắn ốc bằng bê-tông đá rửa. Trên cao đối diện với hình tượng con rùa có một bệ đài hình tròn, đường kính khoảng 10m, cao 8m, lên xuống bằng 3 tầng bậc tam cấp hướng về Nhà thờ Đức Bà. Bệ đài này thường hay được dùng làm nơi trình diễn ca nhạc vào những ngày Lễ lớn.';
  contentArticlePar3 = 'Hiện nay Hồ con Rùa là một thắng cảnh có giá trị về mặt kiến trúc, được nhiều hàng cây xanh cổ thụ vây quanh tạo khung cảnh "cây dài bóng mát" gây ấn tượng sâu đậm nơi người khách du lịch ngoài nước và du khách mọi miền khi đến tham quan TPHCM.';
  name = 'Johnny';
  numOfPost = 'Number of Posts: ';
  follower = 'Follower: ';
  following = 'Following: ';
  checkin = 'Check in';
  relatedPost = 'Related Posts';

  constructor() { }

  ngOnInit() {
  }

}
