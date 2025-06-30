"use server";

// import { zeomartServiceInstance } from '@/app/services/instaces/zeomartService';

export async function uploadAction(
  url: string,
  data: any
): Promise<any | { error: string }> {
  try {
    // const _data = await zeomartServiceInstance.post(url, data, {
    //   config: {
    //     hasAttachment: true,
    //   },
    // });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000); // 2000 ms delay (2 seconds)
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
