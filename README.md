### Cách truyền dữ liệu lên đám mây và xử lý dữ liệu theo thời gian thực bằng các dịch vụ như Serverless, AWS Kinesis, AWS Lambda
## Các bước thực hiện
### 1. Tạo một User trong IAM cấp quyền có thể thao tác với Amazon S3, AWS Kinesis, quyền Admin
<img alt="iam per.png" src="https://github.com/TuongVi0612/Streaming-process-aws-kinesis-lambda/blob/master/img/iam%20per.png">

### 2. Cài đặt Serverless 
Serverless là công nghệ phi máy chủ trên AWS xây dựng và chạy ứng dụng mà không cần phải bận tâm đến máy chủ. Việc cài đặt serverless để tạo một luồng xử lý dữ liệu trên AWS Kinesis và kết nối với dịch vụ lưu trữ đám mây trên AWS.
Chạy file [serveless.yml](https://github.com/TuongVi0612/Streaming-process-aws-kinesis-lambda/blob/master/serverless.yml) bằng câu lệnh "serverless deploy".
<img alt="serverless.png" src="https://github.com/TuongVi0612/Streaming-process-aws-kinesis-lambda/blob/master/img/serverless.png">

### 3. Tải dữ liệu lên AWS Kinesis Stream
Chạy file [producer.js](https://github.com/TuongVi0612/Streaming-process-aws-kinesis-lambda/blob/master/producer.js) bằng câu lệnh "node producer.js" để tải dữ liệu lên và mỗi lần tải sẽ chạy 10 tập dữ liệu một lần. 
<img alt="upload.png" src="https://github.com/TuongVi0612/Streaming-process-aws-kinesis-lambda/blob/master/img/upload%20.png">

### 4. Kiểm tra dữ liệu trên Amazon CloudWatch
<img alt="cloudwatch" src="https://github.com/TuongVi0612/Streaming-process-aws-kinesis-lambda/blob/master/img/cloudwatch.png">

