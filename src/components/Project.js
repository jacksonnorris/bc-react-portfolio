const Project = ({ url, name, id, src }) => {
  return (
    <div className="content" id={`${id}`}>
      <a href={`${url}`} className='content' id={`${name}`}>
        <div className="contentImage">
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