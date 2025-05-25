alert("Saim Ahmed: This website doesn't have any funtionaliy, it is just a simple clone of the main X.com website's design")
function responses() {

// For like Btn to work 

function likeEffect() {

let heartLis = document.getElementsByClassName("heartLi");
let heartSvgs = document.getElementsByClassName("heartSvg");
let heartPaths = document.getElementsByClassName("heartPath");

let defaultPath = "M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z";

let likedPath = "M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z";

Array.from(heartLis).forEach((li, index) => {
  li.addEventListener("click", () => {
    let path = heartPaths[index];
    let svg = heartSvgs[index];
    let isLiked = path.getAttribute("d") === likedPath;

    path.setAttribute("d", isLiked ? defaultPath : likedPath);

    // Inline fill only, stroke is handled by Tailwind (group-hover)
    svg.style.fill = isLiked ? "" : "#ec4899"; // nothing or pink-500
  });
});
}

likeEffect()

// For share Btn to work

function shareEffect(){

    let shareLis = document.getElementsByClassName("shareLi")
    let shareSvgs = document.getElementsByClassName("shareSvg")
    let sharePaths = document.getElementsByClassName("sharePath")
    
    let shared = false;
    
    Array.from(shareLis).forEach((li,index) => {
        li.addEventListener("click",() => {
            let svg = shareSvgs[index];
    
            shared = !shared
    
            svg.style.fill = !shared ? "" : "#00c951";
        })
    });
}

shareEffect();

// For save Btn to work

function saveEffect(){
    let saveLis = document.getElementsByClassName("saveLi")
    let saveSvgs = document.getElementsByClassName("saveSvg")
    let savePaths = document.getElementsByClassName("savePath")

    let defaultPath = "M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z";
    let savedPath = "M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z";

    Array.from(saveLis).forEach((li,index) => {
        li.addEventListener("click", ()=>{
            let path = savePaths[index];
            let svg = saveSvgs[index];
            let isSaved = path.getAttribute("d") === savedPath;

            path.setAttribute("d", isSaved ? defaultPath : savedPath);

            svg.style.fill = isSaved ? "" : "#00a6f4"
        })
    });
}

saveEffect();

}

responses()