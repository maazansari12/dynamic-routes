function CategoryChip({category ,ischoosen ,onClick}) {
    // console.log(onClick);
    
  
    return (
        <div onClick={onClick} className={`${ischoosen ?"bg-purple-500 text-white":"bg-white"} p-2 px-4 border-purple-400c m-1  cursor-pointer hover:bg-purple-300 hover:text-white border rounded-md`}>{category.name}</div>
  
    )
  }
  export default CategoryChip