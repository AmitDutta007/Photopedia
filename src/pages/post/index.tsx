import FileUploader from "@/components/fileUploader";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";

interface IPostProps { }

const Post: React.FunctionComponent<IPostProps> = (props) => {

  const handleSubmit = () => {

  }


  return (
    <Layout>
      <div className="flex justify-center">
        <div className="border max-w-3xl w-full">
          <h3 className="bg-slate-800 text-white text-center text-lg p-2">
            Create Post
          </h3>
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <Label className="mb-4" htmlFor="caption">
                  Photo Caption
                </Label>
                <Textarea
                  className="mb-8"
                  id="caption"
                  placeholder="what's in your photo!"
                // value={post.caption}
                // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                //   setPost({ ...post, caption: e.target.value })
                // }
                />
              </div>
              <div className="flex flex-col">
                <Label className="mb-4" htmlFor="photo">
                  Photos
                </Label>
                <FileUploader/>
              </div>
              <Button className="mt-8 w-32" type="submit">
                Post
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default Post;