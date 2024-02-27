import React, {FormEvent} from 'react'

function SearchSection({searchValue, onChange, t}:any) {

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  
  return (
    <section className='search-section'>
        <h3>{t("search_products_title")}</h3>
        <form onSubmit={handleSubmit} role="search">
            <input
            type='text'
            data-kt-user-table-filter='search'
            placeholder={`${t("search_placeholder")}`}
            onChange={onChange}
            value={searchValue || ""}
            // onBlur={() => setSearchValue("")}  
            />
            <button type='submit'><span className="icon-search"></span></button>
        </form>
    </section>
  )
}

export default SearchSection