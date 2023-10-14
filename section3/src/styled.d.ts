import "styled-components";

// styled components의 theme  정의를 확장
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
  }
}
