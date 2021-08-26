<?php
namespace App\Controller;

use App\Entity\Goods;
use App\Entity\Brands;
use App\Entity\Gallery;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\Query;

class ShopController extends AbstractController
{
    public function __construct(EntityManagerInterface $em) {
        $this->em = $em;
    }
    public function index(Request $request): Response
    {
		//$request->query->get('name');
		
       $price = $request->get('price');
       $cat = $request->get('cat');
       $brand = $request->get('brand');
       //////
		$query = $this->em->createQueryBuilder();
		$query->select(array('g')) 
		   ->from('App\Entity\Goods', 'g')
		   //->orderBy('g.name', 'ASC')
		   ;
		if(isset($price)){
			$prices = explode("-", $price);
			$from_price = $prices[0];
			$to_price = $prices[1];
			   $query = $query->where('g.price BETWEEN :min AND :max')
				->setParameter('min', $from_price)
				->setParameter('max', $to_price)
				->getQuery();
		}elseif(isset($cat)){
			$query = $query->leftJoin('g.category', 'category')
			->where('category.cat_translit = :catTranslit')
			->setParameters(array(':catTranslit' => $cat))
			->getQuery();
		}elseif(isset($brand)){
			$query = $query->leftJoin('g.brand', 'brand')
			->where('brand.url = :brandTranslit')
			->setParameters(array(':brandTranslit' => $brand))
			->getQuery();
		}else{
			$query = $query->setFirstResult(0);
		   $query = $query->setMaxResults(6);
		   $query = $query->getQuery();
		}
		$paginator = new Paginator($query, $fetchJoinCollection = true);
		///
		//set page size
		//$pageSize = '100';
		//$totalItems = count($paginator);
		
		
		//$paginator = new \Doctrine\ORM\Tools\Pagination\Paginator($query);
		////
		$goods = $query->getResult();
		/*echo "<pre>";
		print_r($goods);
		echo "</pre>";
		exit;*/
		/////
		$brands = $this->getDoctrine()
            ->getRepository(Brands::class)
            ->findAll();
		///
		$prices_choice = array("0-200" => "$0.00 - $200.00", "201-400" => "$201.00 - $400.00", "401-600" => "$401.00 - $600.00");
        return $this->render('shop/index.html.twig', [
			'goods' => $paginator,
            //'goods' => $goods,
			'brands' => $brands,
			'prices_choice' => $prices_choice,
        ]);
    }
    /**
     * @Route("/shop/{goods_translit}", name="goods_show", methods={"GET"})
     */
    public function detail(): Response
    {
		/*
		$goods_id = $good->getId();
		$query = $this->getDoctrine()
			->getRepository(Gallery::class)
			->createQueryBuilder('g')
			->select('g.id', 'g.name', 'g.img')
			->where('g.goods_id = :goodsId')
			->setParameters(array(':goodsId' => $goods_id))
			->getQuery();
		$gallery = $query->getResult(Query::HYDRATE_ARRAY);
		*/
		return $this->render('shop/detail.html.twig', [
            //'good' => $good,
           // 'gallery' => $gallery,
        ]);
	}
     public function stop(Request $request): Response
    {
		echo "stop func";
		exit;
	}
}
