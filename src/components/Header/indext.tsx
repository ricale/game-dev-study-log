import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <h1>
        <Link href="/">Game Dev Study Log</Link>
      </h1>
      <address>
        by <a href="https://ricale.kr/blog" target="_blank">ricale</a>
      </address>
      <p>취미로 하는 게임 개발 공부 기록</p>
    </div>
  );
};

export default Header;
