export interface LogoType {
  src: string;
  alt: string;
}
  
  // `Skill` 인터페이스 정의
export interface SkillType {
  logos: LogoType[]; // 각 기술에 대한 로고 배열
  names: string[]; // 기술 이름 배열
  description: string[]; // 기술 설명 배열
}

interface PeopleType {
  name: string,
  role: string
}

export interface PortfolioItemType {
  type: string,
  thumbnail: string,
  title: string,
  subtitle: string,
  date: string[],
  people: PeopleType[],
  techs: string[] ,
  summary: string[],
  github: string,
  link: string,
  description: string[],
  video: string,
  screenshot: string[]
}

// export interface popupProps {
//   popupItem: PortfolioItemType | null;
// }