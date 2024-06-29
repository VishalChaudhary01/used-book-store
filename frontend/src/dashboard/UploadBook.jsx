import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createProduct } from "../actions/productActions";
import Loader from "../components/Loader";

function UploadBook() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, success, error } = useSelector(
    (state) => state.productCreate
  );

  const bookCategories = [
    "Novel",
    "Self Development",
    "School",
    "Collage",
    "Competition",
    "Story",
    "Horror",
  ];

  const [selectBookCategory, setSelectBookCategory] = useState(
    bookCategories[0]
  );

  const handleChngeSelectedVlaue = (e) => {
    setSelectBookCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    {
      loading && <Loader />;
    }
    if (userInfo) {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const author = form.author.value;
      const price = form.price.value;
      const imageUrl = form.imageUrl.value;
      const publishYear = form.publishYear.value;
      const category = form.category.value;
      const description = form.description.value;

      const bookObj = {
        name,
        author,
        price,
        imageUrl,
        category,
        publishYear,
        description,
      };

      dispatch(createProduct(bookObj));
    } else {
      navigate("/");
      enqueueSnackbar("Please login", { variant: "error" });
    }
  };

  useEffect(() => {
    if (success) {
      console.log(success);
      navigate("/dashboard/manage-books");
      enqueueSnackbar("Book Uploaded successfully", {
        variant: "success",
      });
    }
    if (error) {
      console.log(error);
      enqueueSnackbar(error, { variant: "error" });
    }
  }, [success, error, navigate, dispatch]);

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>
      <form
        onSubmit={handleSubmit}
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
              placeholder="Author name"
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
            rows={4}
          />
        </div>

        <Button
          type="submit"
          className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UploadBook;
