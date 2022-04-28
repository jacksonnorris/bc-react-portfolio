import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me!</h1>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name" />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <input type="text" class="form-control" id="message" placeholder="Enter message" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

  );
}
