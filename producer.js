const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

AWS.config.update({ region: 'ap-southeast-1' }); // Thay 'your-region' bằng region AWS của bạn
const kinesis = new AWS.Kinesis();
const streamName = '*********************'; // Thay 'your-kinesis-stream' bằng tên của Kinesis stream của bạn

// Thư mục chứa các file JSON
const directoryPath = 'D:/Batch processing/Udacity-DEND_DataLake-AWSEMR/data/log-data'; // Thay '/path/to/json/files' bằng đường dẫn tới thư mục của bạn

// Đọc danh sách các file trong thư mục
const files = fs.readdirSync(directoryPath);

// Lặp qua từng file và gửi dữ liệu lên Kinesis stream
files.forEach((fileName) => {
  const filePath = path.join(directoryPath, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const params = {
    Data: JSON.stringify({ data: fileContent }),
    PartitionKey: '1234',
    StreamName: streamName
  };

  kinesis.putRecord(params, (err, data) => {
    if (err) {
      console.error(`Lỗi khi gửi dữ liệu từ file ${fileName}:`, err);
    } else {
      console.log(`Dữ liệu từ file ${fileName} đã được gửi thành công vào Kinesis stream:`, data);
    }
  });
});