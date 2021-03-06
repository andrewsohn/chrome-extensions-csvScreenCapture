module.exports = {
  "name": {
    "message":"HiveCapture 일괄 스크린 캡처툴"
  },
    "description": {
    "message":"HiveCapture :: CSV File Screen Capture Tool"
  },
    "timeout": {
      "message":"$nth$ 번째 URL를 캡처하는 도중에 Timeout error가 발생하였습니다.\n다시 시도하여 주십시요.",
      "placeholders": {
          "nth": {
            "content": "$1",
            "example": "unknown number"
          }
        }
    },
    "proceed": {
        "message":"개 URL 캡쳐를 진행하시겠습니까?"
    },
    "complete": {
        "title":"Capture Complete!",
        "message":"일괄 캡처를 완료하였습니다."
    },
    "forceStop": {
        "title":"Capture Stoped!",
        "message":"일괄 캡처를 취소하였습니다."
    },
    "emptyFile": {
        "message":"죄송합니다. 유효한 URL을 찾을 수가 없습니다.\n다시 첨부하여 주십시요."
    },
    "ImproperCSVAttached": {
        "message":"Please upload a proper CSV file."
    },
    "fileNotAttached": {
        "message":"CSV 파일을 첨부하지 않았습니다.\n다시 시도하여 주십시요."
    },
    "timerTimeNotSet": {
        "message":"Timer 캡처 발생 시간을 지정하지 않으셨습니다.\n다시 시도하여 주십시요."
    },
    "outOfCsvUrl": {
        "message":"캡처 URL 목록이 존재하지 않습니다.\n다시 시도하여 주십시요."
    },
    "erorrRedirect": {
        "message":"$nth$ 번째 URL에서 404 에러가 발생하였습니다. 어플리케이션 결과 페이지에서 현재까지 캡처 이미지를 확인 하실 수 있습니다.",
        "placeholders": {
          "nth": {
            "content": "$1",
            "example": "unknown number"
          }
        }
    },
    "zipConfirm": {
      "message":"Zip 파일 다운로드와 동시에 해당 파일을 서버에서 보관하지 않습니다.\n진행하시겠습니까?"
    }
};