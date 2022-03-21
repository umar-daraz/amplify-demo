export default function PostForm({ onAddPost }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    console.log("title ", title);
    console.log("content ", content);
    onAddPost({
      title,
      content,
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleFormSubmit}>
      <div className="mb-4 flex flex-col">
        <label className="mb-1">Title: </label>
        <input name="title" className="border p-1 border-indigo-500" />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1">Content: </label>
        <input name="content" className="border p-1 border-indigo-500" />
      </div>
      <button className="border-2">Add Post</button>
    </form>
  );
}
