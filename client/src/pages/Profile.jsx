import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from "../firebase";

function profile() {
  const fileRef = useRef(null);
  const currentUser = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [fileperc ,setFilePerc] =  useState("0");
  const [fileuploaderror, setFileUploadError]=useState(false);
  const [formdata, setFormData] = useState({});
  console.log(formdata,"form data")
  let currentUserData = currentUser.currentUser?.rest? currentUser.currentUser?.rest?.avatar : currentUser.currentUser?.avatar
  //firebase Storage
  //  allow read;
  //     allow write: if request.resource.size < 1024 * 1024 &&
  //     request.resource.contentType.matches('image/.*');

  useEffect(() => {
    if (file) {
      handleFileUpload(file)
    }
  }, [file])

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setFilePerc(Math.floor(progress))
      },
      (error) => {
        // Handle unsuccessful uploads
        setFileUploadError(true)
        // console.error("Upload failed", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => 
          setFormData({ ...formdata , avatar:downloadURL })
        );
      }
      )
      }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input type="file" ref={fileRef} hidden accept="image/*" onChange={(e) => setFile(e.target.files[0])}/>
        <img onClick={() => fileRef.current.click()} src={ formdata?.avatar ? formdata.avatar: currentUserData } alt="Profile" className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"/>
        <p className='text-sm self-center'>
          {fileuploaderror ? (
            <span className='text-red-700'>
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : fileperc > 0 && fileperc < 100 ? (
            <span className='text-slate-700'>{`Uploading ${fileperc}%`}</span>
          ) : fileperc === 100 ? (
            <span className='text-green-700'>Image successfully uploaded!</span>
          ) : (
            ''
          )}
        </p>
        <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg" />
        <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg" />
        <input type="text" placeholder="password" id="password" className="border p-3 rounded-lg" />
        <button className="bg-slate-500 text-white rounded-lg cursor-pointer hover:opacity-95 disabled:opacity-87 border p-1">Update Profile</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer"> Delete Account </span>
        <span className="text-red-700 cursor-pointer"> SignOut </span>
      </div>
    </div>
  )
}

 export default profile;