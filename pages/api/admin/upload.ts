import type { NextApiRequest } from "next";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default async function handler(req: NextApiRequest, res: any) {
  if (req.method === "POST") {
    const { name: productName, fileList: fileList } = req.body;

    
    // let urls: { src: string }[] = [];
    // await Promise.all(
    //   fileList.map(async (item: any) => {
    //     const storageRef = ref(storage, `${productName}/${item.name}`);
    //     await uploadString(
    //       storageRef,
    //       item.thumbUrl as string,
    //       "data_url"
    //     ).then((snapshot) => {
    //       getDownloadURL(snapshot.ref).then((url) => {
    //         // urls = [...urls, { src: url }];
    //         urls.push({ src: url });
    //       });
    //     });
    //   })
    // ).then((result) => {
    //   // console.log(result);
    // });
    // console.log(urls);
    // res.json(urls);
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}
