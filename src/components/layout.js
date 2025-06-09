import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <div style={{textAlign: "center", display: "flex", justifyContent: "center", gap: "1rem"}}>
          <a href="https://www.linkedin.com/in/khizar-irshad-chaudhry/">LinkedIn</a>
          <a href="https://github.com/KhizarIrshadChaudhry">GitHub</a>
          <a href="https://www.youtube.com/channel/UCIpMjfZC5W5sRD18oEQDb4Q">YouTube</a>
        </div>
        <div  style={{textAlign: "center", marginTop: "20px"}}>
        Copyright © {new Date().getFullYear()} Khizar Irshad Chaudhry
        </div>
      </footer>
    </div>
  )
}

export default Layout
