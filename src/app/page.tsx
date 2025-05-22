'use client'

import { 
  Container, 
  Text, 
  useToast, 
  Button, 
  Tooltip, 
  VStack, 
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Heading,
  Flex
} from '@chakra-ui/react'
import { useAppKitAccount, useAppKitNetwork, useAppKitProvider } from '@reown/appkit/react'
import { BrowserProvider, parseEther, formatEther } from 'ethers'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [txLink, setTxLink] = useState<string>()
  const [txHash, setTxHash] = useState<string>()
  const [balance, setBalance] = useState<string>('0')
  const [selectedAmount, setSelectedAmount] = useState<number>(42) // Default to 42 euros

  const { address, isConnected } = useAppKitAccount()
  const { walletProvider } = useAppKitProvider('eip155')
  const toast = useToast()
  const t = useTranslation()

  const handleStart = () => {
    console.log(`Starting DCA with ${selectedAmount} euros`)
    toast({
      title: 'DCA Started',
      description: `Starting Dollar Cost Averaging with €${selectedAmount} per month`,
      status: 'info',
      duration: 5000,
      isClosable: true,
    })
  }

  // Slider marks for visual reference
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
    color: 'gray.400',
  }

  return (
    <Container maxW="container.sm" py={20}>
      <VStack spacing={12} align="stretch">
        <Box textAlign="center">
          <Box mb={12} px={4}>
            <Text mb={20} fontSize="lg" color="gray.300">
              Select your monthly investment amount
            </Text>
            
            <Box px={4} mb={20}>
              <Slider
                aria-label="investment-amount"
                min={20}
                max={100}
                step={1}
                value={selectedAmount}
                onChange={(val) => setSelectedAmount(val)}
                colorScheme="blue"
              >
                <SliderMark value={20} {...labelStyles}>
                  €20
                </SliderMark>
                <SliderMark value={50} {...labelStyles}>
                  €50
                </SliderMark>
                <SliderMark value={100} {...labelStyles}>
                  €100
                </SliderMark>
                <SliderMark
                  value={selectedAmount}
                  textAlign="center"
                  bg="blue.500"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                  px={2}
                  py={1}
                  borderRadius="md"
                  fontSize="sm"
                >
                  €{selectedAmount}
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="blue.500" />
                </SliderThumb>
              </Slider>
            </Box>
          </Box>

          <Button
            onClick={handleStart}
            size="lg"
            bg="#45a2f8"
            color="white"
            _hover={{
              bg: '#3182ce',
            }}
            px={12}
            py={6}
            fontSize="lg"
            fontWeight="bold"
            borderRadius="lg"
          >
            Start DCA with €{selectedAmount}/month
          </Button>
        </Box>

          {isConnected && (
          <Box>
            <Text mb={4} color="gray.400">
              You wallet address: 
            </Text>
            <Text mb={4} color="#8c1c84">
              <strong>{address}</strong>
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  )
}