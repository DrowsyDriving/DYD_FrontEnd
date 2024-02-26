import React from "react";
import styled from "styled-components";
import axios from "axios";

export default function Map() {
  const axios = require("axios");

  async function getCoordinates(address) {
    const apiKey = "618ff27898d682a62ab4b6c1ebb5b5a6";

    const url = `http://drowsydriving.site:8080/alert/save`

    try {
      const response = await axios.getAdapter(url, {
        headers: {
          "Authorization" : `KaKaoAK ${apiKey}`
        }
      });

      // 응답 확인
      if (response.status === 200) {
        const data = response.data;

        // 첫 번째 결과의 좌표 반환
        if(data.documents.length > 0) {
          const coordinates = {
            x: data.documents[0].x,
            y: data.documents[0].y
          };
          return coordinates;
        } else {
          return null;
        }
      } else {
        // 실패한 경우 오류 메시지 출력
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    }catch (error) {
      // 예외 발생 시 오류 메이시 출력
      console.error(`Exception: ${error.message}`);
      return null;
    }
  }
}