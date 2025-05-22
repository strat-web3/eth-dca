'use client'

import {
  Container,
  Text,
  useToast,
  Button,
  VStack,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Link,
} from '@chakra-ui/react'
import { useAppKitAccount } from '@reown/appkit/react'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { formatTranslation } from '@/translations'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Home() {
  const [selectedAmount, setSelectedAmount] = useState<number>(42) // Default to 42 euros

  const { address, isConnected } = useAppKitAccount()
  const toast = useToast()
  const t = useTranslation()

  const handleStart = () => {
    console.log(`Starting DCA with ${selectedAmount} euros`)
    toast({
      title: t.home.dcaStarted,
      description: formatTranslation(t.home.dcaStartedDescription, { amount: selectedAmount }),
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
              {t.home.selectAmount}
            </Text>

            <Box px={4} mb={20}>
              <Slider
                aria-label="investment-amount"
                min={20}
                max={100}
                step={1}
                value={selectedAmount}
                onChange={val => setSelectedAmount(val)}
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
            {formatTranslation(t.home.startDca, { amount: selectedAmount })}
          </Button>
        </Box>

        {isConnected && (
          <Box>
            <Text mb={4} color="gray.400">
              {t.home.walletAddress}
            </Text>
            <Link
              href={`https://optimistic.etherscan.io/address/${address}`}
              isExternal
              color="#8c1c84"
              fontWeight="bold"
              _hover={{
                color: '#6d1566',
                textDecoration: 'underline',
              }}
              display="inline-flex"
              alignItems="center"
              gap={1}
              wordBreak="break-all"
              flexWrap="wrap"
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <Text as="span" wordBreak="break-all">
                {address}
              </Text>
              <ExternalLinkIcon mx="2px" flexShrink={0} />
            </Link>
          </Box>
        )}
      </VStack>
    </Container>
  )
}
