 import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import instanse from "../lib/axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content , setContent] = useState("");
  const [loading , setLoading] = useState(false);

    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title.trim() || !content.trim()) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      await instanse.post("/notes", {
        title,
        content
      });
      toast.success("Note created successfully");
      setTitle("");
      setContent("");
      setLoading(false);
      navigate("/");
    }
    catch (error) {
      if(error.response.status === 429) { 
        toast.error("Slow down! You are doing that too much." , {
          duration: 4000,
          style: { background: "#f87171", color: "#fff" }
        });
        setLoading(false);
        return;
      }else{
        toast.error("Something went wrong");
      }
      
    }
                                     
  };
  return <div className="min-h-screen bg-red-200">
    <div className="container mx-auto pt-4">
      <div className = "max-w-md mx-auto background-white p-6 rounded-md shadow-md" >
        <Link  to = "/" className="btn btn-secondary mb-6" >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back To Note
          </Link>
        <div className="card bg-base-100 p-4 rounded-md shadow-md" >
          <form onSubmit={handleSubmit}>
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Created New Note</h2>
            <div className="form-control mb-4" >
              <label htmlFor="" className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" name="" id="" placeholder="Note Title" 
              className="input input-bordered"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}/>
            </div>

            <div className="form-control mb-4" >
              <label htmlFor="" className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea type="text" name="" id="" placeholder="Note Content" 
              className="textarea textarea-bordered h-24"
              value={content}
              onChange={(e)=>setContent(e.target.value)}/>
            </div>

            <div className="card-actions justify-end" >
              <button type="submit" disabled={loading} className="btn btn-primary">
                {loading ? "Creating..." : "Create Note"}
              </button>
            </div>
            
          </div>
          </form>
        </div>
        
      </div>
    </div>
  </div>;
}
export default Create;