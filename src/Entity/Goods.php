<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Goods;
use App\Entity\Categories;
/**
 * Goods
 *
 * @ORM\Table(name="goods", indexes={@ORM\Index(name="id", columns={"id"})})
 * @ORM\Entity
 */
class Goods
{
	
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="img", type="string", length=500, nullable=false)
     */
    private $img;

    /**
     * @var int
     *
     * @ORM\Column(name="category_id", type="integer", nullable=false)
     */
    private $categoryId;

    /**
     * @var int
     *
     * @ORM\Column(name="brand_id", type="integer", nullable=false)
     */
    private $brandId;

    /**
     * @var float
     *
     * @ORM\Column(name="price", type="float", precision=10, scale=0, nullable=false)
     */
    private $price;

    /**
     * @var float
     *
     * @ORM\Column(name="discount_price", type="float", precision=10, scale=0, nullable=false)
     */
    private $discountPrice;

    /**
     * @var int
     *
     * @ORM\Column(name="discount", type="integer", nullable=false)
     */
    private $discount;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=65535, nullable=false)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="size", type="text", length=65535, nullable=false)
     */
    private $size;

    /**
     * @var string
     *
     * @ORM\Column(name="logo", type="string", length=500, nullable=false)
     */
    private $logo;

    /**
     * @var array
     *
     * @ORM\Column(name="sex", type="simple_array", length=0, nullable=false)
     */
    private $sex;

    /**
     * @var string
     *
     * @ORM\Column(name="material", type="string", length=500, nullable=false)
     */
    private $material;

    /**
     * @var array
     *
     * @ORM\Column(name="visible", type="simple_array", length=0, nullable=false, options={"default"="show"})
     */
    private $visible = 'show';

    /**
     * @var string
     *
     * @ORM\Column(name="goods_translit", type="string", length=255, nullable=false)
     */
    private $goodsTranslit;

    /**
     * @var bool
     *
     * @ORM\Column(name="first_page", type="boolean", nullable=false)
     */
    private $firstPage = '0';

    /**
     * @var int
     *
     * @ORM\Column(name="shop_id", type="integer", nullable=false)
     */
    private $shopId;

    /**
     * @var int
     *
     * @ORM\Column(name="company_id", type="integer", nullable=false)
     */
    private $companyId;
    //@ORM\OneToMany(targetEntity="Categories", mappedBy="category")
    ///@ORM\ManyToOne(targetEntity="Categories", inversedBy="category")
	/** 
	 * @ORM\ManyToOne(targetEntity="Categories", inversedBy="goods") 
	 * @ORM\JoinColumn(name="category_id", referencedColumnName="id") 
	 **/ 
	protected $category;
	
	///////
	/** 
	 * @ORM\ManyToOne(targetEntity="Brands", inversedBy="goods") 
	 * @ORM\JoinColumn(name="brand_id", referencedColumnName="id") 
	 **/ 
	protected $brand;

	public function getCategory() {
		return $this->category;
	}

	public function setCategory($category) {
	   $this->category = $category;
	}

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): self
    {
        $this->img = $img;

        return $this;
    }

    public function getCategoryId(): ?int
    {
        return $this->categoryId;
    }

    public function setCategoryId(int $categoryId): self
    {
        $this->categoryId = $categoryId;

        return $this;
    }

    public function getBrandId(): ?int
    {
        return $this->brandId;
    }

    public function setBrandId(int $brandId): self
    {
        $this->brandId = $brandId;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getDiscountPrice(): ?float
    {
        return $this->discountPrice;
    }

    public function setDiscountPrice(float $discountPrice): self
    {
        $this->discountPrice = $discountPrice;

        return $this;
    }

    public function getDiscount(): ?int
    {
        return $this->discount;
    }

    public function setDiscount(int $discount): self
    {
        $this->discount = $discount;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getSize(): ?string
    {
        return $this->size;
    }

    public function setSize(string $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getSex(): ?array
    {
        return $this->sex;
    }

    public function setSex(array $sex): self
    {
        $this->sex = $sex;

        return $this;
    }

    public function getMaterial(): ?string
    {
        return $this->material;
    }

    public function setMaterial(string $material): self
    {
        $this->material = $material;

        return $this;
    }

    public function getVisible(): ?array
    {
        return $this->visible;
    }

    public function setVisible(array $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    public function getGoodsTranslit(): ?string
    {
        return $this->goodsTranslit;
    }

    public function setGoodsTranslit(string $goodsTranslit): self
    {
        $this->goodsTranslit = $goodsTranslit;

        return $this;
    }

    public function getFirstPage(): ?bool
    {
        return $this->firstPage;
    }

    public function setFirstPage(bool $firstPage): self
    {
        $this->firstPage = $firstPage;

        return $this;
    }

    public function getShopId(): ?int
    {
        return $this->shopId;
    }

    public function setShopId(int $shopId): self
    {
        $this->shopId = $shopId;

        return $this;
    }

    public function getCompanyId(): ?int
    {
        return $this->companyId;
    }

    public function setCompanyId(int $companyId): self
    {
        $this->companyId = $companyId;

        return $this;
    }


}
