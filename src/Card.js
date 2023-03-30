import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as React from "react";
import "./App.css";

const style = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
  width: 400, bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3,}

export default function Card() {
  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = React.useState("");
  const [open0, setOpen0] = React.useState(false);
  const [image, setImage] = React.useState([]);
 
  const Image = async (name,reader)=>{
    let result = await fetch("http://localhost:3001/home", {
      method: "post",
      body: JSON.stringify({name}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("image", JSON.stringify(result));
    toast.success('Image Added Succesfully')
  }

  const collectData = async () => {
    let name = image.name;
    const reader = new FileReader();
    reader.readAsDataURL(image);
    console.log(image)
    let ans = await localStorage.getItem("image", JSON.stringify(image));
    let ans0 = JSON.parse(ans);
    if(ans0===null){Image(name)}
    else{
     if(ans0.name===name){
      toast.error('Image Already Exits')
     }else{Image(name)}
    }
  };

  return (
    <div className="card">
      <div className="inner">
        <div className="inner1">
          <h4>NAME:-{name}</h4>
          <h5>DESCRIPTION:-{desc}</h5>
        </div>
        <div className="inner2">
          <image src={image.name}/>
        </div>
      </div>
      <div id="cardbutton">
        <div>
          <Button variant="contained" color="primary" onClick={()=>{setOpen(true)}}>
            Edit N$D{" "}
          </Button>
          <Modal
            open={open}
            onClose={()=>{setOpen(false)}}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 400 }} className="modalbox">
              <h2 id="child-modal-title">Edit Your Name</h2>
              <input
                type={"text"}
                placeholder={"Enter your name"}
                style={{ height: "2.5rem", width: "23rem", margin: "0.5rem" }}
                onChange={(e)=>{setName(e.target.value)}}
              />
              <input
                type={"text"}
                placeholder={"Enter your description"}
                style={{ height: "2.5rem", width: "23rem", margin: "0.5rem" }}
                onChange={(e)=>{setDesc(e.target.value)}}
              />
              <div id="modal">
            <Button variant="contained" color="success"onClick={()=>{setOpen(false)}}> 
            Add name</Button>
              <Button variant="contained" color="error" onClick={(e)=>{setName('')}}>
                  Delete name
                </Button>
                <Button variant="contained" color="error" onClick={(e)=>{setName('')}}>
                  Delete des
                </Button>
              </div>
            </Box>
          </Modal>
        </div>

        <div>
       
          <Button variant="contained" color="success" onClick={()=>{setOpen0(true)}}>
            Add Image
          </Button>
          <Modal
            open={open0}
            onClose={()=>{setOpen0(false)}}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 400 }} className="modalbox">
           
              <h2 id="child-modal-title">Edit Your Name</h2>
              <input
                type={"file"}
                placeholder={"Enter your name"}
                onChange={(e)=>{setImage(...image, e.target.files[0])}}
                style={{ height: "2rem", width: "20rem", margin: "0.5rem" }}
              />
              <div id="modal">
                <Button
                  variant="contained"
                  color="success"
                  onClick={collectData}
                >
                  Add Image
                </Button>
                <ToastContainer />
                <Button
                  variant="contained"
                  color="error"
                  onClick={()=>{setOpen0(false)}}
                >
                  close
                </Button>
                <Button variant="contained" color="error">
                  Delete image
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
