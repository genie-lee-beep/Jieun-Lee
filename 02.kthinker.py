##이제 파이썬에 있는 GUI 사용법에 대해 알아보려 한다.
##파이썬에서는 Tkinter이라는 모듈을 이용하여 기본적인 GUI 구현이 가능하다.
##우선 Tkinter 모듈을 불러오기 위해
##from Tkinter import *로 지정하면 된다.

# 08_tk_dict01A.py 에서 파일 읽어와서 단어의 뜻을 확인하기
from tkinter import *
import pandas as pd
import os  #폴더를 만들고, 삭제...현재 폴더 위치.
global dat

print(os.getcwd()) #현재 디렉토리 이름 #파이썬의 장점!!자동으로 나옴

data = pd.read_csv('한국전력공사_전력관련 용어사전 정보_20190828.csv', encoding='euc-kr')  #pandas에서 엑셀을 불러 올때. #한글파일 불러올 경우 euc-kr 또는 CP949
print(data.columns) #columns 읽어올거야


# 기능 추가
# 제출 버튼을 클릭했을 때, 동작 기능.
# 키
def click():
    # pass
    word = entry.get()  # 아래 엔트리 상자의 내용을 text로 넣는다.
    # END로 지정하면 문자열이 입력된 최종 입력 지점을 의미.
    # 특정 시작 지점부터 텍스트 엔트리 위젯의 끝까지 모두 지우기 위해 END를 쓴다.
    output.delete(0.0, END) # 텍스트 박스 내용을 지운다.

    #실행할 내용
    try:  #loc은 data(파일)을 불러온다는 명령어(**pandas dataflame 'loc')
        def_word = data.loc[data['용어']==word, '용어설명'].values[0]   #엑셀 파일형태가 word,column 두개 열로 되어 있음 #values는 excel의 row의 몇 줄 거를 갖고 올건지(단어에 여러개 용어설명이 있을 수 있으니까)
    #예외처리
    except:
        def_word = "단어를 뜻을 찾을 수 없음."
        # dat = window_add(dat)

    output.insert(END, def_word)

window = Tk()  #tkinter 모듈에 Tk()라는 클래스를 읽어 옴
#Tk()가 GUI 창을 만드는 것이고   label.grid  등등을 통해 GUI를 꾸민다고 보시면 됩니다.
window.title("My Dictionary")

# 01 입력 상자 설명 레이블
## window에 연결시키고, grid 붙이고
label = Label(window, text = "원하는 단어 입력 후, 엔터 키 누르기")
label.grid(row=0, column=0, sticky=W) # grid:최종 장착해주는 명령어 # W:West

# 02. 텍스트 입력이 가능한 상자(Entry)
entry = Entry(window, width=15, bg="light green") #객체상자
entry.grid(row=1, column=0, sticky=E)

# 03.
button = Button(window, text='제출', width=15, command=click )# 버튼을 올릴 장소, 버튼에 들어갈 내용 #click 동작실행
button.grid(row=2, column=0, sticky=W)

# 04. 설명 레이블 - 의미
label2 = Label(window, text='\n의미:') #제출 버튼과의 공간을 주기 위해서 한 줄 띄움
label2.grid(row=3, column=0, sticky=W)

# 05 텍스트 박스 입력 상자
# columnspan=2 는 (4,0)~(4,1) 위치까지 분포
output = Text(window, width=50, height=6, wrap=WORD, background='light green')
output.grid(row=4, column=0, columnspan=2, sticky=W)

# 메인 반복문 실행
window.mainloop()
