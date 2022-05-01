import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me!</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" placeholder="Enter message" rows="6" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  );
}
