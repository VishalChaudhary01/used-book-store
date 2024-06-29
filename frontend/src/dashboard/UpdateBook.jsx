import React, { useState } from "react";
import { Button, Textarea, Label, TextInput, Select } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";

function UpdateBook() {
  const { id } = useParams();
  const { name, author, imageUrl, category, price, publishYear, description } =
    useLoaderData();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const bookCategories = ["Word", "Horrer"];
  const [selectBookCategory, setSelectBookCategory] = useState(category);

  const { userInfo, error } = useSelector((state) => state.userLogin);

  const handleChngeSelectedVlaue = (e) => {
    setSelectBookCategory(e.target.value);
  };

  const handleUpdate = async (e) => {
    if (userInfo) {
      e.preventDefault();
      const form = e.target;

      const name = form.bookName.value;
      const author = form.author.value;
      const price = form.price.value;
      const imageUrl = form.imageUrl.value;
      const publishYear = form.publishYear.value;
      const category = form.category.value;
      const description = form.description.value;

      const updatedBookObj = {
        name,
        author,
        price,
        imageUrl,
        category,
        publishYear,
        description,
      };

      try {
        const res = await fetch(`http://localhost:5000/api/books/${id}`, {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBookObj),
        });
        const data = await res.json();
        // console.log(data);

        enqueueSnackbar(data.message, { variant: "success" });
        navigate("/dashboard/manage-books");
      } catch (error) {
        enqueueSnackbar("Something went wrong, please try again", {
          variant: "error",
        });
        navigate("/dashboard/manage-books");
      }
    } else {
      enqueueSnackbar("Please Login", { variant: "error" });
      navigate("/login");
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-wrap flex-col gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Book name" />
            </div>
            <TextInput
              id="name"
              type="text"
              name="bookName"
              placeholder="Book name"
              defaultValue={name}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author" />
            </div>
            <TextInput
              id="author"
              name="author"
              type="text"
              placeholder="Author name"
              defaultValue={author}
              required
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Book price" />
            </div>
            <TextInput
              id="price"
              type="text"
              name="price"
              placeholder="Book price"
              defaultValue={price}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="publishYear" value="Publish Year" />
            </div>
            <TextInput
              id="publishYear"
              name="publishYear"
              type="text"
              placeholder="Publication year"
              defaultValue={publishYear}
              required
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block ">
              <Label htmlFor="Image" value="Book Image" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Image Url"
              defaultValue={imageUrl}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="category"
              value={selectBookCategory}
              onChange={handleChngeSelectedVlaue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="inputState">Description</Label>
          </div>
          <Textarea
            id="description"
            placeholder="Write about book..."
            required
            defaultValue={description}
            rows={4}
          />
        </div>

        <Button
          type="submit"
          className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default UpdateBook;
