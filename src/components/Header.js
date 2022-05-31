import Nav from './Nav';

const HeaderB = {
    render: () => (
//         <div class="b-example-divider"></div>
        
//         <div class="container d-flex flex-wrap">
//         <ul class="nav me-auto">
//           <li class="nav-item"><a href="#" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
//           <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Features</a></li>
//           <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Pricing</a></li>
//           <li class="nav-item"><a href="#" class="nav-link link-dark px-2">FAQs</a></li>
//           <li class="nav-item"><a href="#" class="nav-link link-dark px-2">About</a></li>
//         </ul>
//         <ul class="nav">
//           <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Login</a></li>
//           <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Sign up</a></li>
//         </ul>
//       </div>
//       <header class="py-3 mb-4 border-bottom">
//     <div class="container d-flex flex-wrap justify-content-center">
//       <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
//         <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
//         <span class="fs-4">Double header</span>
//       </a>
//       <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
//         <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
//       </form>
//     </div>
//   </header>
`<header>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
           
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
                Trang Chủ
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"></use></svg>
                Giới Thiệu
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"></use></svg>
                Sản Phẩm
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"></use></svg>
                Tin Tức
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"></use></svg>
                Liên Hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2 border-bottom mb-3">
      <div class="container d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-light text-dark me-2">Login</button>
          <button type="button" class="btn btn-primary">Sign-up</button>
        </div>
      </div>
    </div>
  </header>`
    )
}


const Header = {
    // render: function () {
    //     return '<div>Header Component</div>';
    // },
    // render: (name, age, birthday) => ('<div>' + name + ', ' + age + ',' + '</div>'),
    render: (name = 'WE17101') =>
        `<div>
            <h1>${name}</h1>
            <div>${Nav.render()}</div>
        </div>`
    // sau mũi tên là ngoặc tròn -> return kết quả
};

export default HeaderB;