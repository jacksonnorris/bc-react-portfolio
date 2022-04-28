const Project = ({ url, name, id, src }) => {
  return (
    <div className="content" id={`${id}`}>
      <a href={`${url}`} id={`${name}`}>
        <div className="contentImg">
          <img src={`${src}`} alt={`${name}`} />
        </div>
        <div className="contentInfo">
          {name}
        </div>
      </a>
    </div>
  )
}

export default Project;