import BuggyCounter from "./BuggyCounter";
import MyErrorBoundary from "./MyErrorBoundary";

function ErrorBoundry(){
    function refreshPage() { 
        window.location.reload(false);
    }
  return (
    <div>
      <MyErrorBoundary>
        <BuggyCounter />
      </MyErrorBoundary>
      <hr />
      <button onClick={refreshPage}>
        Refresh Page
      </button>
    </div>
  );
}

export default ErrorBoundry;