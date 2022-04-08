# What if Genie Projects  (README 수정중)

### Genie Blog
* Medium  
* Tistiry  
### Repository Content
  *  Bootcamp : 
  * 참조 코드 : https://www.w3schools.com/js
  * 
###  머신러닝
일반적으로는 데이터를 기반으로 패턴을 학습하고 결과를 예측하는 알고리즘 기법입니다. 예로 금융 사기 예측, 자전거 대여 수를 예측, 스팸 메일 구분 등에 사용할 수 있습니다.
이런 것들을 예측하기 위해서는 다양한 환경 변수, 규칙, 케이스들이 존재하는데, 규칙들이 복잡해 지면 인간이 다룰 수 있는 한계가 있습니다. 그리고 시간과 비용의 한계, 예측의 정확성이 떨어질 수 있습니다. 
 업무적으로 복잡한 조건/규칙들이 다양한 형태로 결합하고 시시각적으로 변하면서 도저히 소프트웨어코드로 로직을 구성하여 이들을 관통하는 일정한 패턴을 찾기 어려운 경우에 머신러닝은 숨겨진 패턴을 스스로 찾아내어 훌륭한 솔루션을 제공합니다.
 
 - **비지도 학습( Unsupervised Learning):**
    - 우리가 예측해야 하는 값(target)의 출력값이 없이 입력 데이터 만을 이용하여 학습 알고리즘을 가르쳐야 하 는 모든 종류의 머신러닝
    - 비지도 학습의 종류: clustering(군집화), 차원 축소
    - 비지도 변환: 100개의 특징을 다 쓰면, 과대적합이 생기니까, 중요한 성분을 뽑아낸다. 공통성이 있는 특징을 만들어서 10개만 추출해서, 100개 특징을 99% 쓴 것과 같은 효과를 낸다.
    - 적은 수로도 기존의 데이터 성질을 잘 반영할 수 있도록 변환 시켜 준다. 예) PCA
    - 특성이 많은 고차원 데이터의 특성(feature)의 수를 줄이면서 꼭 필요한 특징을 포함한 데이터로 표현하는 방법인 차원 축소(dimensionality reduction)
   
  - **지도학습(Supervised Learning):**
    - 인간이 데이터를 분류해서 레이블을 붙여줌
    - 명확한 정답이 주어진 데이터를 먼저 학습한 뒤 미지의 정답을 예측하는 방식
    - 지도학습은 회귀(regression)과 분류(classification)으로 나누어진다.
    - 분류,회기, 추천시스템, 시각/음성 감지/인지, 텍스트 분석,NLP
    - 예: iris 품종 예측하기
    
    - **분류(Classification)**
    - 주어진 데이터가 어떤 라벨(클래스)인지 예측하는 것 -discreet한 output을 가짐
    - 생선 사진을 보고 넙치(광어)인지 도다리인지 구별하는 문제. 넙치, 도다리와 같은 것을 각각 클래스(class)라고 한다.
 \
 ###  모델 만들기
  * 1.**Load and check** (datahttps://celestial-fennel-924.notion.site/1-Load-and-check-data-65365288a87145fda63142743dab3c8f)
  * 2.**Exploratory Data Analysis(EDA)** (https://celestial-fennel-924.notion.site/2-Exploratory-Data-Analysis-EDA-bc589bedc2424f90bc631014265d5881)
  * 3.**3. 데이터 전처리 Data Preprocessing** https://celestial-fennel-924.notion.site/3-Data-Preprocessing-5c218b3eccff43259157939bd97fd24f
  * 4.**Feature scaling** (https://www.notion.so/4-Feature-scaling-b4ee44db252147f080a041f10e99f20e)
  * 5.**머신러닝 모델 만들기**(https://celestial-fennel-924.notion.site/5-bfb0d6f6dde442a0aa27b1ebefc42579)
  * 6. 
  * [MarkDown 사용법 총정리] https://heropy.blog/2017/09/30/markdown/

###  딥러닝

### 소스 코드 
| 파일명 | code(.html) | 설명 |
|------  |---          |---   |
|01_01.html |01_01.html | 첫 자바스크립트 만들기|
|01_02.html |01_02.html | alert() 함수를 이용한 경고 메시지 출력|
