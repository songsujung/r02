import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";
import TestLayout from "../layouts/TestLayout";

const MainPage = () => {
    return ( 
        <BasicLayout>
            <div>Main Page</div>

            <TodoList></TodoList>

        </BasicLayout>
     );
}
 
export default MainPage;