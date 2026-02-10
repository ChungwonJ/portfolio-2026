import { ProjectData, ProjectId } from '@/types/project';

export const PROJECTS_DATA: Record<ProjectId, ProjectData> = {
  portforu: {
    id: "portforu",
    name: "Portforu ㅣ 포트폴리오 기반 채용 공고 추천 서비스",
    architectureImage: "/architecture.png",
    projectSrc: [
      {
        title : "깃허브 : ",
        src: [
          "https://github.com/ping-goo/portforu",
        ]
      }
    ],
    templateBlocks: [
      {
        title: "문제",
        content: [
          "10만 건 이상의 데이터 조회 시 RDBMS LIKE 검색의 한계로 인한 8초 이상의 응답 지연 발생"
        ]
      },
      {
        title: "해결",
        content: [
          "Elasticsearch 기반 전문 검색 엔진 구축 및 Spring Scheduler를 활용한 안정적인 배치 색인 로직 설계"
        ]
      },
      {
        title: "결과",
        content: [
          "검색 속도 92% 개선(0.6초) 및 데이터 동기화 안정성 확보로 사용자 경험 최적화",
        ]
      }
    ],
    caseArchitectureImage: '/es-architecture.png',
    architectureSrc: [
      {
        title : "깃허브(JobPostingIndexScheduler) : ",
        src: [
          "https://github.com/ping-goo/portforu/blob/dev/src/main/java/org/pinggu/portforu/domain/jobposting/elastic/scheduler/JobPostingIndexScheduler.java",
        ]
      }
    ],
    caseStudy: [
      {
        title: "문제 : 데이터 증가에 따른 조회 성능 저하",
        items: [
          "포트폴리오 상세 조회 시 관련 공고 추천 기능을 LIKE 검색으로 구현할때 데이터 축적에따른 성능저하 우려",
          "크롤링 서버와 메인 서버가 분리된 구조로, DB 저장 시점에 실시간으로 검색 엔진에 색인하기 어려운 환경"
        ]
      },
      {
        title: "해결방안",
        items: [
          "Elasticsearch 도입하여 역색인 구조를 활용해 DB의 조회 부하를 분산하고 검색 속도 개선",
          "Spring Scheduler를 활용해 일정 주기마다 색인 작업 수행",
          "상태 관리 플래그(indexed) 도입하여 색인 여부를 확인하여 필요한 데이터만 선별적으로 처리하도록 효율화",
          "작업이 길어질 경우 스케줄러 중복 실행을 방지하는 메커니즘 적용",
          "한 번에 처리할 양을 100개로 제한하여 메모리 과부하 방지 및 시스템 안정성 확보"
        ]
      },
      {
        title: "성과",
        content: [
          "StopWatch를 활용해 10만 건 데이터 기준 기존 RDBMS 방식과 개선된 ES 방식의 성능을 정밀 측정한 결과",
        ],
        testImg: [
          '/es-test-db.png',
          '/es-test.png'
        ]
      },
      {
        title: "느낀점",
        items: [
          "조회 목적에 따라 RDBMS와 전문 검색 엔진을 병행 사용하는 조회 최적화 전략의 중요성 체감하였습니다.",
          "스케줄러 중복 실행 방지, 색인화 100개 제어등 예외상황을 고려해야 하는 부분이 중요하다는걸 체감하였습니다.",
        ]
      }
    ]
  },
  opparecipe: {
    id: "opparecipe",
    name: "Oppa Recipe Project",
    architectureImage: "",
    templateBlocks: [

    ],
    caseStudy: [

    ]
  }
};