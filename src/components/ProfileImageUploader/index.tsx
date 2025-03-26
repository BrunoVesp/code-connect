// 'use client'

// import Image from "next/image";
// import { Button } from "../Button";
// import { FormEvent, useState } from "react";
// import avatarDefault from './empty-avatar.png';

// interface ProfileImageUploaderProps {
//     user: {
//         id: string;
//         name: string | null;
//         email: string | null;
//         avatar: string | null;
//         image: string | null;
//     }
// }

// export const ProfileImageUploader = ({ user }: ProfileImageUploaderProps) => {

//     const [imgSrc, setImgSrc] = useState(user.avatar ?? user.image ?? avatarDefault);
//     const [newAvatar, setNewAvatar] = useState(null);

//     function handleFileChange(event) {
//         const file = event.target.files[0];

//         if (file) {
//             setNewAvatar(file);
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 reader.result;
//                 setImgSrc(reader.result);
//             }
//             reader.readAsDataURL(file);
//         }   
//     }

//     function uploadAvatar(event: FormEvent) {
//         event.preventDefault();
//         fetch('/api/profile', {
//             method: 'POST',
//             body: newAvatar
//         })

//     }

//     if (!user) {
//         return null;
//     }

//     return (
//         <>
//             <ul>
//                 <li>{user.name}</li>
//                 <li>
//                     <Image 
//                         src={imgSrc}
//                         width={254}
//                         height={254}
//                         alt="Avatar"
//                     />
//                 </li>
//             </ul>
//             <form onSubmit={uploadAvatar}>
//                 <input 
//                     type="file"
//                     onChange={handleFileChange}
//                     required
//                 />

//                 <Button>Upload</Button>
//             </form>
//         </>
//     );
// }