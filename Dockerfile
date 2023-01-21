FROM node:18

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY ./backend/package*.json ./

RUN npm install --only=production

# 앱 소스 추가
COPY ./backend .

EXPOSE 3000 

CMD ["npm","start"]