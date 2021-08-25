<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Categories
 *
 * @ORM\Table(name="categories")
 * @ORM\Entity
 */
class Categories
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
     * @ORM\Column(name="cat_translit", type="string", length=255, nullable=false)
     */
    private $cat_translit;
    
   //@ORM\OneToMany(targetEntity="Goods", mappedBy="category") 
   //@ORM\ManyToOne(targetEntity="Goods", inversedBy="category") 
    /** 
	 * @ORM\OneToMany(targetEntity="Goods", mappedBy="category")   
	 **/
	protected $goods;
	
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

    public function getCatTranslit(): ?string
    {
        return $this->catTranslit;
    }

    public function setCatTranslit(string $catTranslit): self
    {
        $this->catTranslit = $catTranslit;

        return $this;
    }


}
