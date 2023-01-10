import { useState } from "react";
import { Button} from "reactstrap";
import {  addDoc, collection } from "firebase/firestore"; 
import { db } from "../database";
const TIME_STAMP = new Date().toLocaleDateString();

export default function Blog() {

  const image="https://images.unsplash.com/photo-1656945590214-9e39fd898ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80";

  const img_caption = "Some stuff about the image goes over here, and some more stuff"; 

  const section = `Main Header Goes Right Over Here`;
  const section2 = `Optional Subheader 1 Goes Right Over Here`;
  const section3 = `Optional Subheader 2 Goes Right Over Here`;
  const section4 = `Optional Subheader 3 Goes Right Over Here`;

  const paragraph1 = ` is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book. It has survived
  not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with the release of Letraset sheets
  containing Lorem Ipsum passages, and more recently with
  desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum.`;

  const paragraph2 = `It is a long established fact that a reader will be distracted
  by the readable content of a page when looking at its layout.
  The point of using Lorem Ipsum is that it has a more-or-less
  normal distribution of letters, as opposed to using 'Content
  here, content here', making it look like readable English.
  Many desktop publishing packages and web page editors now use
  Lorem Ipsum as their default model text, and a search for
  'lorem ipsum' will uncover many web sites still in their
  infancy. Various versions have evolved over the years,
  sometimes by accident, sometimes on purpose (injected humour
  and the like).`;

  const paragraph3 = ` Contrary to popular belief, Lorem Ipsum is not simply random
  text. It has roots in a piece of classical Latin literature
  from 45 BC, making it over 2000 years old. Richard McClintock,
  a Latin professor at Hampden-Sydney College in Virginia,
  looked up one of the more obscure Latin words, consectetur,
  from a Lorem Ipsum passage, and going through the cites of the
  word in classical literature, discovered the undoubtable
  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
  "de Finibus Bonorum et Malorum" (The Extremes of Good and
  Evil) by Cicero, written in 45 BC. This book is a treatise on
  the theory of ethics, very popular during the Renaissance. The
  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
  comes from a line in section 1.10.32.`;

  const paragraph4 = `There are many variations of passages of Lorem Ipsum
  available, but the majority have suffered alteration in some
  form, by injected humour, or randomised words which don't look
  even slightly believable. If you are going to use a passage of
  Lorem Ipsum, you need to be sure there isn't anything
  embarrassing hidden in the middle of text. All the Lorem Ipsum
  generators on the Internet tend to repeat predefined chunks as
  necessary, making this the first true generator on the
  Internet. It uses a dictionary of over 200 Latin words,
  combined with a handful of model sentence structures, to
  generate Lorem Ipsum which looks reasonable. The generated
  Lorem Ipsum is therefore always free from repetition, injected
  humour, or non-characteristic words etc.`;

  const [img,setImg] = useState(image);
  const [image_caption, setImage_captions] = useState(img_caption);
  const [header1, setHeader1] = useState(section);
  const [header2, setHeader2] = useState(section2);
  const [header3, setHeader3] = useState(section3);
  const [header4, setHeader4] = useState(section4);
  const [para1, setPara1] = useState(paragraph1);
  const [para2, setPara2] = useState(paragraph2);
  const [para3, setPara3] = useState(paragraph3);
  const [para4, setPara4] = useState(paragraph4);
  const [blogDate, setBlogDate] = useState(TIME_STAMP);
  const [disabled, setDisabled] = useState(true);


  const handleSubmit = async(e) => { 
    e.preventDefault();
    const res = await addDoc(collection(db, "blogs"), {
      img:image,
      image_caption:image_caption,
      header1:header1, 
      header2:header2,
      header3:header3,
      header4:header4,
      paragraph1:para1,
      paragraph2:para2,
      paragraph3:para3,
      paragraph4:para4,
      blogdate:blogDate,
    });
      console.log(res);
  } 


  return (
    <>
      <hr />    
      <div
        className="w3-padding-32 w3-content w3-text-grey"
        id="contact"
        style={{ margin: "10px auto" }}
      >
        <h2>Blog Demo</h2>
        <div className="turquoise w3-card ">
          <div className="pink">
            <div
              style={{
                border: "solid 4px rgb(250, 200,65)",
                padding: "25px",
                display: "block",
              }}
            >
              <div >
              {img &&  <img src={img} alt="blog" style={ image_caption ?{display:"inline-block", width:"50%", borderRadius:"12px"} :{display:"inline-block", width:"100%"} } />}
               {img && <p style={{display:"inline-block", width:"30%", marginLeft:"50px", fontSize:".9rem"}}>{image_caption}
                </p>}
                <br />
                <br />
                <br />
                <h2>{header1}</h2>
                <br />
                <pre style={{ whiteSpace: "pre-wrap"}}>
                 {para1}
                </pre>
              </div>
   
              <div >
                <h3 style={{color:"black"}}>{header2}</h3>
                <pre style={{ whiteSpace: "pre-wrap"}}>
                 {para2}
                </pre>
              </div>
              <br />
              <br />
              <div style={{ display: "inline-block" }}>
                {header3 && <h3 style={{color:"black"}}>{header3}</h3>}
                <pre style={{ whiteSpace: "pre-wrap"}}>
                 {para3}
                </pre>
              </div>
              <br />
              <br />
              <div style={{ display: "inline-block" }}>
                <h3 style={{color:"black"}}>{header4}</h3>
                <pre style={{ whiteSpace: "pre-wrap"}}>
                  {para4}
                </pre>
              </div>
              <br />
              <p>
              <Button
                      style={{ color: "white" }}
                      onClick={() => {
                        setDisabled(false);
                      }}
                    >
                      Approve
                    </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    
        <div style={{marginLeft:"150px", width:"30%"}}>
        <h2>Blog Form</h2>
            <form
              onSubmit={handleSubmit}
              style={{
                border: "solid 4px rgb(250, 200,65)",
                padding: "25px",
              }}
              target="_blank"
            >
              <p>
                <input
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="image"
                  placeholder="Blog Image"
                  onChange={(e) => setImg(e.target.value)}
                  name="Image"
                  aria-describedby="Blog_Image"
                />
              </p>

              <p>
                <input
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="title"
                  onChange={(e) => setImage_captions(e.target.value)}
                  placeholder="Image Caption"
                  name="Image_Caption"
                  aria-describedby="Image_Caption"
                />
              </p>

              <p>
                <input
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="Header1"
                  onChange={(e) => setHeader1(e.target.value)}
                  placeholder="Main Blog Header"
                  name="Blog_Header"
                  aria-describedby="Blog_Header"
                />
              </p>

              <p>
              <textarea
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="Blog_paragraph1"
                  onChange={(e) => setPara1(e.target.value)}
                  placeholder="Blog First Paragraph"
                  name="Blog_paragraph1"
                  aria-describedby="Blog First Paragraph"
                />
              </p>

              <p>
                <input
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="SubHeader"
                  onChange={(e) => setHeader2(e.target.value)}
                  placeholder="Sub Header"
                  name="Sub_Header"
                  aria-describedby="Sub_Header"
                />
              </p>

              <p>
                <textarea
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="Blog_paragraph2"
                  onChange={(e) => setPara2(e.target.value)}
                  placeholder="Blog Second Paragraph"
                  name="Blog_paragraph2"
                  aria-describedby="Blog Second Paragraph"
                />
              </p>

              <p>
                <input
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="Header3"
                  onChange={(e) => setHeader3(e.target.value)}
                  placeholder="Blog Sub header 3"
                  name="Blog_Header3"
                  aria-describedby="Blog Subheader 3"
                />
              </p>

              <p>
              <textarea
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="Blog_paragraph3"
                  onChange={(e) => setPara3(e.target.value)}
                  placeholder="Blog First Paragraph"
                  name="Blog_paragraph3"
                  aria-describedby="Blog Third Paragraph"
                />
              </p>

              <p>
                <input
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="SubHeader4"
                  onChange={(e) => setHeader4(e.target.value)}
                  placeholder="Sub Header4"
                  name="Sub_Header4"
                  aria-describedby="Blog Subheader 4"
                />
              </p>

              <p>
                <textarea
                  class="form-control"
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  id="Blog_paragraph4"
                  onChange={(e) => setPara4(e.target.value)}
                  placeholder="Blog Fourth Paragraph"
                  name="Blog_paragraph4"
                  aria-describedby="Blog Fourth Paragraph"
                />
              </p>

              <p>
                <button
                  disabled={disabled}
                  type="submit"
                  value="send"
                  className="w3-button w3-light-grey w3-padding-small w3-margin-top"
                  style={{
                    border: "solid 4px rgb(250, 200,65)",
                    borderTopRightRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  Upload{" "}
                </button>
              </p>
            </form>
        </div>

         
              
          
  

    </>
  );
}
