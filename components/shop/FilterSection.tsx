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
}


function FilterSection(
  // {products}:HomeProps
  {t}:any
  ) {
  const router = useRouter();
  const { locale } = useRouter()
  // const receivedBrandId = router.query.brandId !== undefined ? +router.query.brandId : '';
  const receivedCategoryId = router.query.categoryId || '';

  const [data, setData] = useState<Data[]>()
  const [totalPages, setTotalPages] = useState<number>(0) 
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [productsPerPage, setProductsPerPage] = useState<number>(9)
  const [brandId, setBrandId] = useState<string>("") 
  const [catData, setCatData] = useState<CategoryType[]>([])
  const [brands, setBrands] = useState<HomeProps>()
  const [selectedCategories, setSelectedCategories] = useState<(number | null)[]>([]);
  const [searchValue, setSearchValue] = useState<null | string>(null)
  
    
  useEffect(() => {
   document.body.style.backgroundColor = "#ffffff"
  }, [])
    

  function getProductsData() {
    let url =  new URL(`${baseUrl}/products?page=${currentPage}&size=${productsPerPage}`)
    if(searchValue) {
      url.searchParams.append("search", searchValue)
    }
    if(brandId) {
      url.searchParams.append("brand_id", brandId)
    }
    if(selectedCategories.length) {
      url.searchParams.append("categories", selectedCategories.join(","))
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
    setSelectedCategories([receivedCategoryId])
  }, [receivedCategoryId])

  

  useEffect(() => {
    getProductsData()
      .then(req => req.json())
      .then((res) => {
        if(currentPage > res.totalPages){
          setCurrentPage((res.totalPages - res.totalPages) + 1)
          setTotalPages(res.totalPages)
          setData(res.products);
        } else {
          setCurrentPage(res.currentPage)
          setTotalPages(res.totalPages)
          setData(res.products);
        }

        // setCurrentPage(res.currentPage)
      });
  }, [currentPage, brandId, selectedCategories])


  useEffect(() => {
    const handle = setTimeout(() => {
      if(searchValue !== null) {
          getProductsData()
          .then(req => req.json())
          .then((res) => {
            if(currentPage > res.totalPages) { 
              setCurrentPage((res.totalPages - res.totalPages) + 1)
              setTotalPages(res.totalPages)
              setData(res.products);
            } else {
              setTotalPages(res.totalPages);
              setData(res.products);
              setCurrentPage(res.currentPage);
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
  setSearchValue(e.target.value);
}

  
  function handleCategoryClick(id:number,index:number) {
    console.log(id , index, "-> id and index of selected category");
      
    setSelectedCategories((prevs:any) => {
      if (index <= prevs.length) {
          prevs[index-1] = id;
          return prevs.slice(0, index);
      }
      
    return [...prevs, id].filter(Boolean)
      })
}
console.log(selectedCategories, "-> selectedCategories inside function");


  return (
    <div className='filterSection_wrapper'>
        <div className='productpage_sidebar'>
            <div className=''>

              <div className='single_search_section'>
              <SearchSection t={t} onChange={handleChange} searchValue={searchValue} />
              </div>

               <div className='category_brand_section'>
                <CategoriesSection t={t}  handleCategoryClick={handleCategoryClick} catData={catData} />

                <BrandSection t={t} setBrandId={setBrandId}  brands={brands} />
               </div>

            </div>

        </div>
        <div className='productpage_products'>
          <div className='productpage_container'>
            {data?.map((product) => {
              return (
                <Link key={product.id} href={`/products/${product?.id}`} locale={locale}>
                  <div className='productpage_inner'>
                    <Image   
                      id='myImage'
                      src={product.images[0].image_url}
                      alt="img"
                      width={294}
                      height={294}
                      priority={true}
                      />
                      <div>
                        <p>{locale === "en" ? product.name_en : product.name}</p>
                        <p>{product.code}</p>
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




