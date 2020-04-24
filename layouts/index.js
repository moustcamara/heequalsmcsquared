const DefaultLayout = ({ children }) => (
  <div>

  <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossOrigin="anonymous"
/>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

    <header className="site-header position-sticky">
     <style>{`       
		.site-header {
		    background-color: #000000;
		}

		.site-header h1 {
			color: #ffffff;
		}
      `}</style>
      <nav><div className="container-fluid p-4"><img class="logo" width="100" src="https://images.prismic.io/heequalsmcsqaured/0a4b98b6-f8b5-4e95-ace5-49cdba0380ab_HeEqualsMCSquared+logo+%28white%29+%5BCondensed%5D.png" /></div></nav>
    </header>

    <main>{children}</main>
  </div>
);

export default DefaultLayout;