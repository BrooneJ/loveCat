
<div class="modal-body">
  <div class="markdown github"><h2>주제(시나리오)</h2>

<p>고양이를&nbsp;좋아하는&nbsp;당신은&nbsp;고양이&nbsp;사진&nbsp;전용&nbsp;검색&nbsp;웹사이트를&nbsp;운영하고&nbsp;있었습니다.&nbsp;지금까지는&nbsp;혼자&nbsp;소소하게&nbsp;운영해왔는데,&nbsp;생각보다&nbsp;고양이&nbsp;사진을&nbsp;원하는&nbsp;사람들이&nbsp;많아지면서&nbsp;해결해야&nbsp;할&nbsp;문제들이&nbsp;하나씩&nbsp;드러나기&nbsp;시작했어요.&nbsp;몇&nbsp;개의&nbsp;문제는&nbsp;금세&nbsp;고칠&nbsp;수&nbsp;있지만,&nbsp;기존&nbsp;코드를&nbsp;자세히&nbsp;봐야만&nbsp;고칠&nbsp;수&nbsp;있는&nbsp;문제들도&nbsp;있어서&nbsp;조금&nbsp;골치아픈&nbsp;상황!&nbsp;심지어&nbsp;최대&nbsp;4시간&nbsp;내에&nbsp;수정한&nbsp;뒤&nbsp;배포를&nbsp;해야만&nbsp;합니다.&nbsp;당신이라면&nbsp;기존&nbsp;서비스의&nbsp;여러&nbsp;버그를&nbsp;제한시간&nbsp;내에&nbsp;고치고,&nbsp;유저를&nbsp;위한&nbsp;추가&nbsp;기능까지&nbsp;구현해볼&nbsp;수&nbsp;있을까요?&nbsp;도전해보세요!</p>

<h2>과제&nbsp;설명</h2>

<ul>
<li>thecatapi&nbsp;에서&nbsp;크롤링한&nbsp;데이터를&nbsp;이용해&nbsp;이미지를&nbsp;검색하는&nbsp;베이스&nbsp;코드가&nbsp;주어집니다.</li>
<li>베이스&nbsp;코드는&nbsp;모두&nbsp;ES6&nbsp;클래스&nbsp;기반으로&nbsp;작성되어&nbsp;있으며,&nbsp;이&nbsp;코드에는&nbsp;여러&nbsp;개의&nbsp;버그가&nbsp;존재합니다.&nbsp;요구사항을&nbsp;잘&nbsp;읽고,&nbsp;버그를&nbsp;하나씩&nbsp;해결해주세요.</li>
</ul>

<h2>수행&nbsp;기술</h2>

<ul>
<li>JavaScript(ES6)</li>
<li>설치되어있는&nbsp;모듈(node_modules)&nbsp;외에&nbsp;다른&nbsp;외부&nbsp;라이브러리는&nbsp;사용하지&nbsp;않도록&nbsp;합니다.&nbsp;예를들어&nbsp;jQuery,&nbsp;Webpack,&nbsp;Lodash,&nbsp;Axios,&nbsp;Angular,&nbsp;React,&nbsp;Vue,&nbsp;Immutable-js,&nbsp;Ramda&nbsp;등을&nbsp;사용할&nbsp;수&nbsp;없습니다.</li>
</ul>

<h2>요구사항</h2>

<p><strong>참고</strong>&nbsp;요구사항의&nbsp;순서는&nbsp;난이도와&nbsp;상관이&nbsp;없음</p>

<h3>HTML,&nbsp;CSS&nbsp;관련</h3>

<ul>
<li>현재&nbsp;HTML&nbsp;코드가&nbsp;전체적으로&nbsp;<code>&lt;div&gt;</code>&nbsp;로만&nbsp;이루어져&nbsp;있습니다.&nbsp;이&nbsp;마크업을&nbsp;시맨틱한&nbsp;방법으로&nbsp;변경해야&nbsp;합니다.</li>
<li>유저가&nbsp;사용하는&nbsp;디바이스의&nbsp;가로&nbsp;길이에&nbsp;따라&nbsp;검색결과의&nbsp;row&nbsp;당&nbsp;column&nbsp;갯수를&nbsp;적절히&nbsp;변경해주어야&nbsp;합니다.

<ul>
<li>992px&nbsp;이하:&nbsp;3개</li>
<li>768px&nbsp;이하:&nbsp;2개</li>
<li>576px&nbsp;이하:&nbsp;1개</li>
</ul></li>
<li>다크&nbsp;모드(Dark&nbsp;mode)를&nbsp;지원하도록&nbsp;CSS를&nbsp;수정해야&nbsp;합니다.

<ul>
<li>CSS&nbsp;파일&nbsp;내의&nbsp;다크&nbsp;모드&nbsp;관련&nbsp;주석을&nbsp;제거한&nbsp;뒤&nbsp;구현합니다.</li>
<li>모든&nbsp;글자&nbsp;색상은&nbsp;<code>#FFFFFF</code>&nbsp;,&nbsp;배경&nbsp;색상은&nbsp;<code>#000000</code>&nbsp;로&nbsp;한정합니다.</li>
<li>기본적으로는&nbsp;OS의&nbsp;다크모드의&nbsp;활성화&nbsp;여부를&nbsp;기반으로&nbsp;동작하게&nbsp;하되,&nbsp;유저가&nbsp;테마를&nbsp;토글링&nbsp;할&nbsp;수&nbsp;있도록&nbsp;좌측&nbsp;상단에&nbsp;해당&nbsp;기능을&nbsp;토글하는&nbsp;체크박스를&nbsp;만듭니다.</li>
</ul></li>
</ul>

<h3>이미지&nbsp;상세&nbsp;보기&nbsp;모달&nbsp;관련</h3>

<ul>
<li>디바이스&nbsp;가로&nbsp;길이가&nbsp;768px&nbsp;이하인&nbsp;경우,&nbsp;모달의&nbsp;가로&nbsp;길이를&nbsp;디바이스&nbsp;가로&nbsp;길이만큼&nbsp;늘려야&nbsp;합니다.</li>
<li><strong><code>필수</code></strong>&nbsp;이미지를&nbsp;검색한&nbsp;후&nbsp;결과로&nbsp;주어진&nbsp;이미지를&nbsp;클릭하면&nbsp;모달이&nbsp;뜨는데,&nbsp;모달&nbsp;영역&nbsp;밖을&nbsp;누르거나&nbsp;/&nbsp;키보드의&nbsp;ESC&nbsp;키를&nbsp;누르거나&nbsp;/&nbsp;모달&nbsp;우측의&nbsp;닫기(x)&nbsp;버튼을&nbsp;누르면&nbsp;닫히도록&nbsp;수정해야&nbsp;합니다.</li>
<li>모달에서&nbsp;고양이의&nbsp;성격,&nbsp;태생&nbsp;정보를&nbsp;렌더링합니다.&nbsp;해당&nbsp;정보는&nbsp;<code>/cats/:id</code>&nbsp;를&nbsp;통해&nbsp;불러와야&nbsp;합니다.</li>
<li><code>추가</code>&nbsp;모달&nbsp;열고&nbsp;닫기에&nbsp;fade&nbsp;in/out을&nbsp;적용해&nbsp;주세요.</li>
</ul>

<h3>검색&nbsp;페이지&nbsp;관련</h3>

<ul>
<li>페이지&nbsp;진입&nbsp;시&nbsp;포커스가&nbsp;<code>input</code>&nbsp;에&nbsp;가도록&nbsp;처리하고,&nbsp;키워드를&nbsp;입력한&nbsp;상태에서&nbsp;<code>input</code>&nbsp;을&nbsp;클릭할&nbsp;시에는&nbsp;기존에&nbsp;입력되어&nbsp;있던&nbsp;키워드가&nbsp;삭제되도록&nbsp;만들어야&nbsp;합니다.</li>
<li><strong><code>필수</code></strong>&nbsp;데이터를&nbsp;불러오는&nbsp;중일&nbsp;때,&nbsp;현재&nbsp;데이터를&nbsp;불러오는&nbsp;중임을&nbsp;유저에게&nbsp;알리는&nbsp;UI를&nbsp;추가해야&nbsp;합니다.</li>
<li><strong><code>필수</code></strong>&nbsp;검색&nbsp;결과가&nbsp;없는&nbsp;경우,&nbsp;유저가&nbsp;불편함을&nbsp;느끼지&nbsp;않도록&nbsp;UI적인&nbsp;적절한&nbsp;처리가&nbsp;필요합니다.</li>
<li>최근&nbsp;검색한&nbsp;키워드를&nbsp;<code>SearchInput</code>&nbsp;아래에&nbsp;표시되도록&nbsp;만들고,&nbsp;해당&nbsp;영역에&nbsp;표시된&nbsp;특정&nbsp;키워드를&nbsp;누르면&nbsp;그&nbsp;키워드로&nbsp;검색이&nbsp;일어나도록&nbsp;만듭니다.&nbsp;단,&nbsp;가장&nbsp;최근에&nbsp;검색한&nbsp;5개의&nbsp;키워드만&nbsp;노출되도록&nbsp;합니다.</li>
<li>페이지를&nbsp;새로고침해도&nbsp;마지막&nbsp;검색&nbsp;결과&nbsp;화면이&nbsp;유지되도록&nbsp;처리합니다.</li>
<li><strong><code>필수</code></strong>&nbsp;SearchInput&nbsp;옆에&nbsp;버튼을&nbsp;하나&nbsp;배치하고,&nbsp;이&nbsp;버튼을&nbsp;클릭할&nbsp;시&nbsp;<code>/api/cats/random50</code>&nbsp;을&nbsp;호출하여&nbsp;화면에&nbsp;뿌리는&nbsp;기능을&nbsp;추가합니다.&nbsp;버튼의&nbsp;이름은&nbsp;마음대로&nbsp;정합니다.</li>
<li>lazy&nbsp;load&nbsp;개념을&nbsp;이용하여,&nbsp;이미지가&nbsp;화면에&nbsp;보여야&nbsp;할&nbsp;시점에&nbsp;load&nbsp;되도록&nbsp;처리해야&nbsp;합니다.</li>
<li><code>추가</code>&nbsp;검색&nbsp;결과&nbsp;각&nbsp;아이템에&nbsp;마우스&nbsp;오버시&nbsp;고양이&nbsp;이름을&nbsp;노출합니다.</li>
</ul>

<h3>스크롤&nbsp;페이징&nbsp;구현</h3>

<ul>
<li>검색&nbsp;결과&nbsp;화면에서&nbsp;유저가&nbsp;브라우저&nbsp;스크롤&nbsp;바를&nbsp;끝까지&nbsp;이동시켰을&nbsp;경우,&nbsp;그&nbsp;다음&nbsp;페이지를&nbsp;로딩하도록&nbsp;만들어야&nbsp;합니다.</li>
</ul>

<h3>랜덤&nbsp;고양이&nbsp;배너&nbsp;섹션&nbsp;추가</h3>

<ul>
<li>현재&nbsp;검색&nbsp;결과&nbsp;목록&nbsp;위에&nbsp;배너&nbsp;형태의&nbsp;랜덤&nbsp;고양이&nbsp;섹션을&nbsp;추가합니다.</li>
<li>앱이&nbsp;구동될&nbsp;때&nbsp;`/api/cats/random50`&nbsp;api를&nbsp;요청하여&nbsp;받는&nbsp;결과를&nbsp;별도의&nbsp;섹션에&nbsp;노출합니다.</li>
<li>검색&nbsp;결과가&nbsp;많더라도&nbsp;화면에&nbsp;5개만&nbsp;노출하며&nbsp;각&nbsp;이미지는&nbsp;좌,&nbsp;우&nbsp;슬라이드&nbsp;이동&nbsp;버튼을&nbsp;갖습니다.</li>
<li>좌,&nbsp;우&nbsp;버튼을&nbsp;클릭하면,&nbsp;현재&nbsp;노출된&nbsp;이미지는&nbsp;사라지고&nbsp;이전&nbsp;또는&nbsp;다음&nbsp;이미지를&nbsp;보여줍니다.(트렌지션은&nbsp;선택)</li>
</ul>

<h3>코드&nbsp;구조&nbsp;관련</h3>

<ul>
<li>ES6&nbsp;module&nbsp;형태로&nbsp;코드를&nbsp;변경합니다.

<ul>
<li><code>webpack</code>&nbsp;,&nbsp;<code>parcel</code>&nbsp;과&nbsp;같은&nbsp;번들러를&nbsp;사용하지&nbsp;말아주세요.</li>
<li>해당&nbsp;코드&nbsp;실행을&nbsp;위해서는&nbsp;<code>http-server</code>&nbsp;모듈을(로컬&nbsp;서버를&nbsp;띄우는&nbsp;다른&nbsp;모듈도&nbsp;사용&nbsp;가능)&nbsp;통해&nbsp;<code>index.html</code>&nbsp;을&nbsp;띄워야&nbsp;합니다.</li>
</ul></li>
<li>API&nbsp;fetch&nbsp;코드를&nbsp;<code>async</code>&nbsp;,&nbsp;<code>await</code>&nbsp;문을&nbsp;이용하여&nbsp;수정해주세요.&nbsp;해당&nbsp;코드들은&nbsp;에러가&nbsp;났을&nbsp;경우를&nbsp;대비해서&nbsp;적절히&nbsp;처리가&nbsp;되어있어야&nbsp;합니다.</li>
<li><strong><code>필수</code></strong>&nbsp;API&nbsp;의&nbsp;status&nbsp;code&nbsp;에&nbsp;따라&nbsp;에러&nbsp;메시지를&nbsp;분리하여&nbsp;작성해야&nbsp;합니다.&nbsp;아래는&nbsp;예시입니다.</li>
</ul>

```js
const request = async (url: string) => {
    try{
        const result = await fetch(url);
        return result.json();
    }catch(e){
        console.warn(e);
    }
}

const api = {
    fetchGif: keyword => {
        return request(`${API_ENDPOINT}/api/gif/search?q=${keyword}`);
    },
    fetchGifAll:()=>{
        return request(`${API_ENDPOINT}/api/gif/all`);
    }
};
```
<ul>
<li>SearchResult&nbsp;에&nbsp;각&nbsp;아이템을&nbsp;클릭하는&nbsp;이벤트를&nbsp;Event&nbsp;Delegation&nbsp;기법을&nbsp;이용해&nbsp;수정해주세요.</li>
<li>컴포넌트&nbsp;내부의&nbsp;함수들이나&nbsp;Util&nbsp;함수들을&nbsp;작게&nbsp;잘&nbsp;나누어주세요.</li>
</ul>

<h2>API</h2>

<h3>1. GET /cats/random50</h3>

<h4>Request parameter</h4>

<p>None</p>

<h4>Query paramter</h4>

<p>None</p>

<h4>Response</h4>

<p>Success 200</p>
<table class="table">
        <thead><tr>
<th>Field name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
        <tbody><tr>
<td>data</td>
<td>Array</td>
<td>랜덤한 50개의 고양이 사진 목록입니다.</td>
</tr>
</tbody>
      </table><div class="highlight"><pre class="codehilite"><code><span class="nx">HTTP</span><span class="o">/</span><span class="mf">1.1</span> <span class="mi">200</span> <span class="nx">OK</span>
<span class="p">{</span>
  <span class="s2">"data"</span><span class="p">:</span> <span class="p">[{</span>
    <span class="na">id</span><span class="p">:</span> <span class="nx">string</span>
    <span class="na">url</span><span class="p">:</span> <span class="nx">string</span>
    <span class="na">name</span><span class="p">:</span> <span class="nx">string</span>
  <span class="p">}]</span>
<span class="p">}</span>
</code></pre></div>
<h3>2. GET /cats/search</h3>

<h4>Request parameter</h4>

<p>None</p>

<h4>Query paramter</h4>
<table class="table">
        <thead><tr>
<th>Field name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
        <tbody><tr>
<td>q</td>
<td>string</td>
<td>고양이의 품종(영어/한글)</td>
</tr>
</tbody>
      </table>
<h4>Response</h4>

<p>Success 200</p>
<table class="table">
        <thead><tr>
<th>Field name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
        <tbody><tr>
<td>data</td>
<td>Array</td>
<td>Keyword로 검색된 고양이 사진 목록입니다.</td>
</tr>
</tbody>
      </table><div class="highlight"><pre class="codehilite"><code><span class="nx">HTTP</span><span class="o">/</span><span class="mf">1.1</span> <span class="mi">200</span> <span class="nx">OK</span>
<span class="p">{</span>
  <span class="s2">"data"</span><span class="p">:</span> <span class="p">[{</span>
    <span class="na">id</span><span class="p">:</span> <span class="nx">string</span>
    <span class="na">url</span><span class="p">:</span> <span class="nx">string</span>
    <span class="na">name</span><span class="p">:</span> <span class="nx">string</span>
  <span class="p">}]</span>
<span class="p">}</span>
</code></pre></div>
<h3>3. GET /cats/:id</h3>

<h4>Request parameter</h4>
<table class="table">
        <thead><tr>
<th>Field name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
        <tbody><tr>
<td>id</td>
<td>string</td>
<td>고양이 사진의 id값 입니다.</td>
</tr>
</tbody>
      </table>
<h4>Query paramter</h4>

<p>None</p>

<h4>Response</h4>

<p>Success 200</p>
<table class="table">
        <thead><tr>
<th>Field name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
        <tbody><tr>
<td>data</td>
<td>Object</td>
<td>Id로 검색된 고양이 사진 입니다.</td>
</tr>
</tbody>
      </table><div class="highlight"><pre class="codehilite"><code><span class="nx">HTTP</span><span class="o">/</span><span class="mf">1.1</span> <span class="mi">200</span> <span class="nx">OK</span>
<span class="p">{</span>
  <span class="s2">"data"</span><span class="p">:</span> <span class="p">{</span>
    <span class="nl">name</span><span class="p">:</span> <span class="nx">string</span>
    <span class="nx">id</span><span class="p">:</span> <span class="nx">string</span>
    <span class="nx">url</span><span class="p">:</span> <span class="nx">string</span>
    <span class="nx">width</span><span class="p">:</span> <span class="nx">number</span>
    <span class="nx">height</span><span class="p">:</span> <span class="nx">number</span>
    <span class="nx">temperament</span><span class="p">:</span> <span class="nx">string</span>
    <span class="nx">origin</span><span class="p">:</span> <span class="nx">string</span>
  <span class="p">}</span>
<span class="p">}</span>
</code></pre></div></div>