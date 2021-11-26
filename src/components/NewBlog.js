import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function NewBlog() {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
    console.log(blog);
  };

  return (
    <div className="new-blog-container">
      <div className="new-blog">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={blog.title} name="title" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea" rows={10} value={blog.body} name="body" onChange={handleChange} />
          </Form.Group>
          <Button>Submit</Button>
        </Form>
        Rich Text Coming Soon
      </div>
    </div>
  );
}
