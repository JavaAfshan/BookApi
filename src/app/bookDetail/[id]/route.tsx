
import BookDetailView from "@/app/dummy/views/BookDetail/index";
const bookDetail = (props: any) => {
    return (
        <div>
            Book Detail
            {/* @ts-expect-error Server Component */}
            <BookDetailView {...props} />
        </div>
    )
}
export default bookDetail;