/* eslint-disable prefer-const */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import Product from "./Product";
import "./ProductList.css";
import {
    Button,
    Center,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    SimpleGrid
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const prodM: Product[] = [
    {
        name: "UD Football Shirt",
        price: 10,
        stock: 10,
        description: "Support UD Football in this grey t-shirt!",
        sizes: ["S", "M", "L"],
        picture: "ud_shirt",
        category: "Shirts"
    },
    {
        name: "UD Crewneck",
        price: 35,
        stock: 10,
        description: "Support UD in this comfy  crewneck.",
        sizes: ["S", "M", "L"],
        picture: "UDcrew",
        category: "Shirts"
    },
    {
        name: "Jeans",
        price: 20,
        stock: 10,
        description: "These breathable jeans are perfect for work or school.",
        sizes: ["S", "M", "L"],
        picture: "jeans",
        category: "Pants"
    },
    {
        name: "Sweat-Pants",
        price: 15,
        stock: 10,
        description: "Enjoy the comfortability of these casual sweatpants.",
        sizes: ["S", "M", "L"],
        picture: "sweatpants",
        category: "Pants"
    },
    {
        name: "Nike Hoodie",
        price: 45,
        stock: 10,
        description: "Look sporty with this breathable Nike athletic hoodie.",
        sizes: ["S", "M", "L"],
        picture: "nikeHood",
        category: "Hoodies"
    },
    {
        name: "Apple T-Shirt",
        price: 25,
        stock: 10,
        description: "Think different.",
        sizes: ["S", "M", "L"],
        picture: "appleT",
        category: "Shirts"
    }
];
export let prodW: Product[] = [
    {
        name: "UD T-Shirt",
        price: 10,
        stock: 10,
        description: "Support UD in this grey t-shirt!",
        sizes: ["S", "M", "L"],
        picture: "WTShirt",
        category: "Shirts"
    },
    {
        name: "UD Sweater",
        price: 35,
        stock: 10,
        description: "Support UD in this comfy sweater.",
        sizes: ["S", "M", "L"],
        picture: "Wcrew",
        category: "Shirts"
    },
    {
        name: "Ripped Jeans",
        price: 20,
        stock: 10,
        description: "These stylish jeans are perfect for any casual event.",
        sizes: ["S", "M", "L"],
        picture: "ripped",
        category: "Pants"
    },
    {
        name: "UD Sweatpants",
        price: 15,
        stock: 10,
        description: "Enjoy the comfortability of these UD sweatpants.",
        sizes: ["S", "M", "L"],
        picture: "UDswpants",
        category: "Pants"
    },
    {
        name: "Nike Sport Crewneck",
        price: 45,
        stock: 10,
        description: "Look sporty with this breathable Nike Crew.",
        sizes: ["S", "M", "L"],
        picture: "SportSweater",
        category: "Shirts"
    },
    {
        name: "North Face Zip-Up",
        price: 25,
        stock: 10,
        description: "Go anywhere in this zip-up hoodie from North Face.",
        sizes: ["S", "M", "L"],
        picture: "NFHood",
        category: "Hoodies"
    }
];

const filterOptions = ["All", "Shirts", "Pants", "Hoodies"];

export const removeMProduct = () => {
    const [selectedProduct, setSelectedProduct] = useState(prodM[0]);

    function handleRemoveClick() {
        if (selectedProduct) {
            prodM.splice(prodM.indexOf(selectedProduct), 1);
            setSelectedProduct(prodM[0]);
        }
    }

    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {selectedProduct
                        ? selectedProduct.name
                        : "Select a product"}
                </MenuButton>
                <MenuList>
                    {prodM.map((product) => (
                        <MenuItem
                            key={product.name}
                            onClick={() => setSelectedProduct(product)}
                        >
                            {product.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
            <Button
                colorScheme="red"
                disabled={!selectedProduct}
                onClick={handleRemoveClick}
            >
                Remove
            </Button>
        </div>
    );
};
export const addMProduct = (
    name: string,
    category: string,
    price: number,
    stock: number,
    description: string,
    sizes: string[],
    picture: string
) => {
    const newProduct: Product = {
        name: name,
        price: price,
        stock: stock,
        description: description,
        sizes: sizes,
        picture: picture,
        category: category
    };

    prodM.push(newProduct);
    console.log(prodM); // for testing purposes

    // Return a success message as a JSX element
    return <p>Successfully added {name} to the product list!</p>;
};

export const addWProduct = (
    name: string,
    category: string,
    price: number,
    stock: number,
    description: string,
    sizes: string[],
    picture: string
) => {
    const newProduct: Product = {
        name: name,
        price: price,
        stock: stock,
        description: description,
        sizes: sizes,
        picture: picture,
        category: category
    };

    prodW.push(newProduct);
    console.log(prodW); // for testing purposes

    // Return a success message as a JSX element
    return <p>Successfully added {name} to the product list!</p>;
};

export const removeWProduct = () => {
    const [selectedProduct, setSelectedProduct] = useState(prodW[0]);

    function handleRemoveClick() {
        if (selectedProduct) {
            prodW.splice(prodW.indexOf(selectedProduct), 1);
            setSelectedProduct(prodW[0]);
        }
    }
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {selectedProduct
                        ? selectedProduct.name
                        : "Select a product"}
                </MenuButton>
                <MenuList>
                    {prodW.map((product) => (
                        <MenuItem
                            key={product.name}
                            onClick={() => setSelectedProduct(product)}
                        >
                            {product.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
            <Button
                colorScheme="red"
                disabled={!selectedProduct}
                onClick={handleRemoveClick}
            >
                Remove
            </Button>
        </div>
    );
};

export const ProductListMen = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filteredProd =
        selectedFilter === "All"
            ? prodM
            : prodM.filter((item) => item.category === selectedFilter);
    return (
        <div style={{ padding: 15 }}>
            <Center>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {selectedFilter}
                    </MenuButton>

                    <MenuList>
                        {filterOptions.map((option) => (
                            <MenuItem
                                key="category"
                                onClick={() => {
                                    setSelectedFilter(option);
                                }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Center>
            <br></br>
            <Center>
                <SimpleGrid columns={2} spacing={10}>
                    {filteredProd.map((item) => (
                        <Product {...item} key={item.name} />
                    ))}
                </SimpleGrid>
            </Center>
        </div>
    );
};

const ProductListWomen = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filteredProd =
        selectedFilter === "All"
            ? prodW
            : prodW.filter((item) => item.category === selectedFilter);
    return (
        <div style={{ padding: 15 }}>
            <Center>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {selectedFilter}
                    </MenuButton>

                    <MenuList>
                        {filterOptions.map((option) => (
                            <MenuItem
                                key="category"
                                onClick={() => {
                                    setSelectedFilter(option);
                                }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Center>
            <br></br>
            <Center>
                <SimpleGrid columns={2} spacing={10}>
                    {filteredProd.map((item) => (
                        <Product {...item} key={item.name} />
                    ))}
                </SimpleGrid>
            </Center>
        </div>
    );
};

export default ProductListWomen;
