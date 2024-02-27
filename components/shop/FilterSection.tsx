import { HomeProps } from '@/pages/index'
import { CategoryType } from '@/types/categoryType'
import { Images, Product, ProductType } from '@/types/productType'
import Image from 'next/image'
import React, { ChangeEvent, useEffect, useState } from 'react'
import BrandSection from './BrandSection'
import CategoriesSection from './CategoriesSection'
import Pagination from './Pagination'
import SearchSection from './SearchSection'
import { useRouter } from 'next/router';
import Link from 'next/link'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
interface Data {
    id: number;
    name: string;
    name_ru?:string;
    name_en?: string;
    price: number;
    images: Images[];
    artikul:number;
    code:string,
    count:number
}


function FilterSection(
  // {products}:HomeProps
  {t}:any
  ) {
  const router = useRouter();
  const { locale } = useRouter()
  
  const receivedBrandId= router.query.brandId || '';
  
  const receivedCategoryId = router.query.categoryId || '';
  const [data, setData] = useState<Data[]>()
  const [totalCountOfProducts, setTotalCountOfProducts] = useState<number | null>(null)
  const [totalPages, setTotalPages] = useState<number>(0) 
  const [currentPage, setCurrentPage] = useState<number>(() => {
    return typeof window !== 'undefined' ? sessionStorage.getItem("currentPage") || 1 : 1;

  })
  const [productsPerPage, setProductsPerPage] = useState<number>(9)
  const [brandId, setBrandId] = useState<string>("") 
  const [catData, setCatData] = useState<CategoryType[]>([])
  const [brands, setBrands] = useState<HomeProps>()
  const [selectedCategories, setSelectedCategories] = useState<(number | null)[]>([]);
  // const [searchValue, setSearchValue] = useState<null | string>(null);
  const [searchValue, setSearchValue] = useState(() => {
    // Initialize with sessionStorage value if available, otherwise use an empty string
    return typeof window !== 'undefined' ? sessionStorage.getItem("search") || "" : "";
  });
  
    
  useEffect(() => {
   document.body.style.backgroundColor = "#ffffff";
  }, [])
    

  function getProductsData() {
    
    let url =  new URL(`${baseUrl}/products?page=${currentPage}&size=${productsPerPage}`);
    if(searchValue) {
      url.searchParams.append("search", searchValue);
    } 

    if(brandId) {
      url.searchParams.append("brand_id", brandId);
    } else if(receivedBrandId.length) {
      url.searchParams.append("brand_id", receivedBrandId.toString());
    }

    if(selectedCategories.length) {
      url.searchParams.append("categories", selectedCategories.join(","));
    } else if(receivedCategoryId.length) {
      url.searchParams.append("categories", receivedCategoryId.toString());
    }
     
    return fetch(url.toString())
  }

  useEffect(() => {
    const fetchData = async () => {
        try {
            const brandsResponse = await fetch(`${baseUrl}/brands`);
            const categoriesResponse = await fetch(`${baseUrl}/category/categories-parents`);

            const brandsData = await brandsResponse.json();
            const categoriesData = await categoriesResponse.json();

            setBrands(brandsData);
            setCatData(categoriesData);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, []);

  useEffect(() => {
    const sessionPage = sessionStorage.getItem("currentPage");
    getProductsData()
      .then(req => req.json())
      .then((res) => {
        if(currentPage > res.totalPages){
          setCurrentPage((res.totalPages - res.totalPages) + 1);
          setTotalPages(res.totalPages);
          setData(res.products);
          setTotalCountOfProducts(res.count);

        } else {
          setCurrentPage(res.currentPage);
          setTotalPages(res.totalPages);
          setData(res.products);
          setTotalCountOfProducts(res.count);

        }
      });
  }, [currentPage, brandId, selectedCategories, receivedCategoryId, receivedBrandId])


  useEffect(() => {
    const handle = setTimeout(() => {
      if(searchValue !== null) {
          getProductsData()
          .then(req => req.json())
          .then((res) => {
            if(currentPage > res.totalPages) { 
              setCurrentPage((res.totalPages - res.totalPages) + 1);
              setTotalPages(res.totalPages)
              setData(res.products);
              setTotalCountOfProducts(res.count);


            } else {
              setTotalPages(res.totalPages);
              setData(res.products);
              setCurrentPage(res.currentPage);
              setTotalCountOfProducts(res.count);

            }
            
        })
        .catch(error => {
        console.error(error);
        });
      }
  }, 600);


  return () => {
    clearTimeout(handle);
  };
}, [searchValue]);

function handleChange(e:ChangeEvent<HTMLInputElement>) {
  const searchData = e.target.value;
  setSearchValue(searchData);
  sessionStorage.setItem("search", searchData);
}
  
  function handleCategoryClick(id:number,index:number, level:number) {
    
    setSearchValue("")
    sessionStorage.removeItem("search")
    
    let itemArr = selectedCategories;

    if (level <= itemArr.length) {
      itemArr[level] = id;
      itemArr = selectedCategories.slice(0, level+1);
    } else {
      itemArr = [...selectedCategories, id].filter(Boolean)
    }

    setSelectedCategories(itemArr)
}


  return (
    <div className='filterSection_wrapper'>
        <div className='productpage_sidebar'>
            <div className=''>

              <div className='single_search_section'>
              <SearchSection t={t} onChange={handleChange} searchValue={searchValue} />
              </div>

               <div className='category_brand_section'>
                <BrandSection t={t} setBrandId={setBrandId}  brands={brands} />

                <CategoriesSection t={t} setSelectedCategories={setSelectedCategories}  handleCategoryClick={handleCategoryClick} catData={catData} />

               </div>

            </div>

        </div>
        <div className='productpage_products'>
          {/* <span>Showing 1-{productsPerPage} of {totalCountOfProducts} results</span> */}
          {t('results', {
          count: productsPerPage,
          total: totalCountOfProducts,
        })}
          <div className='productpage_container'>
            {data?.map((product) => {
              return (
                <Link key={product.id} href={`/products/${product?.id}?name=${locale === "am" ? product.name : product.name_en}`} locale={locale}>
                  <div className='productpage_inner' onClick={()=>{
                    router.query.Search
                  }}>
                    <Image  
                      // onMouseEnter={() => setMouseEnter(true)}
                      // onMouseLeave={() => setMouseEnter(false)}
                      id='myImage'
                      src={product?.images[0]?.image_url}
                      alt="img"
                      width={294}
                      height={294}
                      priority={true}
                      />
                      <div>
                        <p>{locale === "en" ? product.name_en : product.name}</p>
                        {/* <p>{product.code}</p> */}
                        <p>{product.artikul}</p>
                      </div>
                  </div>
                 </Link>
              )
            })}
          </div>
          {data?.length ? (
            <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}/>
          ) : (
            <>
            <div className='prods_not_found'>{t("no_products")}</div>
            <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}/>
            </>
          )}
        </div>
    </div>
  )
}

export default FilterSection




