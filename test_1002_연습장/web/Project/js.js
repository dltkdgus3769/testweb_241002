function searchPosts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.getElementById('boardBody').getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const title = rows[i].getElementsByTagName('td')[1].innerText.toLowerCase();
        if (title.includes(input)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

document.getElementById('cancelButton').addEventListener('click', function() {
    window.location.href = 'main.html'; // 가입 취소 시 main.html로 이동
});

// 회원가입 폼 제출 시 동작 (여기에 추가적인 로직을 구현할 수 있습니다)
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 방지
    // 여기서 사용자 입력을 처리하는 코드를 추가할 수 있습니다.
    alert('가입이 완료되었습니다!'); // 예시로 가입 완료 메시지 표시
});
