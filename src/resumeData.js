let resumeData = {
    "name": "정지원",
    "role": "데브옵스 엔지니어",
    "linkedinId":"jiwonj15",
    "email":"jwjeong127@gmail.com",
    "phoneNumber": "010-6850-0658",
    "roleDescription": "일의 효율을 끌어올리는 것을 즐깁니다. 개발자의 생산성을 증가시키거나, 리소스를 효율적으로 사용하는 일에 희열을 느낍니다.",
    "socialLinks": [
        {
            "name":"linkedin",
            "url":"https://www.linkedin.com/in/jiwonj15/",
            "className":"fa fa-linkedin"
        },
        {
            "name":"github",
            "url":"https://github.com/Jivvon",
            "className":"fa fa-github"
        }
      ],
    "aboutme": "안녕하세요. 데브옵스 엔지니어 정지원입니다.\n" +
        "<br>" +
        "저는 <code>생산성</code>, <code>효율성</code>, <code>자동화</code>를 중요시하며 자연스레 CI/CD 파이프라인, 아키텍처, 컨테이너 오케스트레이션 등에 관심을 가지게 되었습니다.\n" +
        "최근에는 쿠버네티스를 학습하고 있으며 Grafana, Prometheus, Promtail, Loki를 이용하여 클러스터에 포함되어 있는 리소스의 메트릭과 어플리케이션 로그를 모니터링하는 시스템을 구축하여 운영하고 있습니다.\n" +
        "<span>같이 일하고 싶은, 책임감 있는 개발자(엔지니어)</span>가 되는 것을 목표로 삼고 있으며 성장하는 느낌이 들 때 가장 행복합니다.",
    "address": "Korea",
    "website": "jwjeong127@gmail.com",
    "education": [
        {
            "UniversityName": "충남대학교",
            "specialization": "컴퓨터공학",
            "MonthOfPassing": "Feb",
            "YearOfPassing": "2022 (졸업 예정)",
        }
    ],
    "work": [
        {
            "CompanyName":"에스아이에이(SI Analytics)",
            "specialization":"DevOps Engineer",
            "MonthOfJoining":"Mar",
            "YearOfJoining":"2021",
            "MonthOfLeaving":"재직 중",
            "description":"인턴 | Mar 2021 ~ Aug 2021, 계약직 | Sep 2021 ~ 현재"
            // "YearOfLeaving":"2021"
        }
    ],
    "skillsDescription": "Docker, Kubernetes, Grafana, Prometheus, Loki, Python, AWS",
    "skillsCategory": [
        {
            "name": "language",
            "skills": [
                {
                    "skillname": "Python"
                },
                {
                    "skillname": "Go"
                }
            ]
        },
        {
            "name": "grafana stack",
            "skills": [
                {
                    "skillname": "Grafana"
                },
                {
                    "skillname": "Prometheus"
                },
                {
                    "skillname": "Loki"
                }
            ]
        },
        {
            "name": "container",
            "skills": [
                {
                    "skillname": "Docker"
                },
                {
                    "skillname": "Kubernetes"
                },
            ]
        },
        {
            "name": "etc",
            "skills": [
                {
                    "skillname": "RabbitMQ"
                },
                {
                    "skillname": "Git"
                },
                {
                    "skillname": "AWS"
                }
            ]
        }
    ],
    "portfolio": [
        {
            "name": "Cartoonizer using GAN",
            "description": "GAN을 활용하여 2D/3D 이미지를 생성하는 웹입니다.",
            "imgurl": "images/portfolio/Cartoonizer-using-GAN.png",
            "preview": "images/portfolio/modals/Cartoonizer-using-GAN.gif",
            "period": "2021/01 ~ 2021/02",
            "stack": '#React.js #Flask #Gunicorn #Nginx #RabbitMQ #Redis #PostgreSQL #Docker #Prometheus #Grafana #AWS #Git #Slack',
            "github": "https://github.com/SV-TeamD/Woowha",
            "contribute": "Backend(all), Frontend(fix, refactor)"
        },
        {
            "name": "충남대학교 컴퓨터공학과 공지사항 알리미",
            "description": "충남대학교 컴퓨터공학과 공지사항을 Slack으로 알려주는 봇입니다. 일정한 시간 간격으로 세 종류의 공지사항을 크롤링하며 AWS EC2로 배포하였습니다.",
            "imgurl": "images/portfolio/cnu-computer-noti-preview.png",
            "preview": "images/portfolio/modals/cnu-computer-noti-architecture.png",
            "period": "2020/03, 2020/07",
            "stack": '#Python #Docker #AWS #Git #Slackbot',
            "github": "https://github.com/Jivvon/cnu-computer-noti",
            "contribute": "Backend(all)"
        },
        {
            "name": "기상정보지원치계",
            "description": "군 복무시절 진행했던 프로젝트입니다. 비행작전 전후에 사령관 등이 예보관들이 입력한 정보, 기상데이터 등을 볼 수 있는 비행작전지원체계, 총 42개의 화면으로 구성되어있으며 기상데이터 입력 및 업로드, 센서장비값 및 상태 확인, HA, 차트, 풍배도 데이터 시각화 서비스를 제공합니다.",
            "imgurl": "images/portfolio/ROKAF.jpeg",
            "preview": "images/portfolio/modals/AMOS-windrose.jpg",
            "period": "2016/04 ~ 2018/02",
            "stack": '#Vue.js #Node.js #Express #D3.js #MongoDB #Nginx',
            "link": "https://github.com/Jivvon/jivvon.github.io/blob/master/기상정보지원체계.md",
            "contribute": "Backend(Real-time wind data), Frontend(windrose, chart)"

        }
    ],
    "experience": [
        {
            "name": "DevOps Intern in SI Analytics [2021.03~2021.08]",
            "description": "쿠버네티스 환경에서 모니터링 시스템을 구축하는 프로젝트를 진행하였습니다. 메트릭과 로그를 수집하여 저장하고 시각화하는 데에 각종 Exporter와 Prometheus, Loki, Grafana를 사용하였습니다. " +
                "모니터링 시스템을 구성하는 서비스가 많기 때문에 Helm chart로 관리하였고, GitOps 방식의 ArgoCD를 이용하여 배포하였습니다. " +
                "또한, GPU 메트릭의 경우 오픈소스를 커스텀하여 원하는 정보를 개발자들에게 제공할 수 있었습니다.",
            "type": "none"
        },
        {
            "name": "2021 Silicon Valley Online Internship [2021.01~2021.02]",
            "description": "2021 Silicon Valley Online Internship에서 'GAN을 활용하여 2D/3D 이미지를 생성하는 웹' 프로젝트에 팀 리더이자 백엔드 개발자로 참여하였습니다. 서버부터 개발 환경 구성, 모델 서빙등 프로젝트의 전반적인 부분을 담당하였으며 " +
                           "모델 서버를 여러 개의 컨테이너로 두고 메세지 큐(RabbitMQ)를 통해 작업을 분배하거나 사용자 경험을 고려하여 인메모리 방식의 데이터베이스(Redis)를 캐시로 사용하는 등 기술적으로 새로운 시도를 많이 한 프로젝트입니다.",
            "type": "github",
            "url": "https://github.com/SV-TeamD/Woowha",
        }
    ],
    "activity": [
        {
            "name": "오픈소스 컨트리뷰톤 - Backend.AI [2020.08~2020.09]",
            "description": "절대적인 기여량은 작고 귀여웠지만 코드를 이해하는 것부터 버전 관리, PR, 커밋 컨벤션 지키기 등 오픈소스에 기여하기 위한 전체적인 과정을 겪은 덕에 오픈소스 생태계를 이해하게 되었습니다. " +
                "특히 Git을 훨씬 잘 활용하게 되어 현재까지도 가장 도움이 된 활동이었습니다." +
                "대회 마지막 주에는 팀을 대표하여 발표를 하기도 하였습니다. ",
            "type": "link",
            "url": "https://github.com/lablup/backend.ai-webui/commits?author=Jivvon"
        }
    ]
}

export default resumeData